import { useState, useEffect } from "react";

const useFetch = (url) => { 
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

        const fetchData = async () => {
            try {
                const response = await fetch(url, { signal: abortCont.signal });
                const text = await response.text(); // Read response as text to debug
                console.log('Response:', text); // Log response to inspect

                if (!response.ok) {
                    throw new Error(`Could not fetch data from ${url}`);
                }
                const result = JSON.parse(text); // Parse JSON manually if needed
                setData(result);
                setIsPending(false);
            } catch (err) {
                if (err.name === 'AbortError') {
                    console.log('Fetch aborted');
                } else {
                    setError(err.message);
                }
                setIsPending(false);
            }
        };

        fetchData();

        return () => abortCont.abort();
    }, [url]);

    return { data, isPending, error };
};

export default useFetch;
