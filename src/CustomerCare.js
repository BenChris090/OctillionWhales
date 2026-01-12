import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FaHeadset } from 'react-icons/fa';
import { useUser } from './UserContext'; // Import the useUser hook
import Layout from './Layout'; // Import the Layout component
import useFetch from './useFetch'; // Import the custom hook for data fetching
import Spinner from './Spinner';

const CustomerCare = () => {
  const { userID } = useParams();
  const navigate = useNavigate();
  const { user } = useUser();
  const { data, isPending, error } = useFetch('/data/db.json');
  const [message, setMessage] = useState('');
  const [aiResponse, setAIResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Integrate with a free AI service (e.g., OpenAI API) or mock a response
    const response = await fetch('https://api.example.com/chat', { // Replace with actual AI API endpoint
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: message }),
    });
    const result = await response.json();
    setAIResponse(result.reply);
  };

  if (isPending) return <Spinner/>;
  if (error) return <div>{error}</div>;

  return (
    <Layout pageTitle="Customer Care" pageIcon={FaHeadset}>
      <div className="bg-gradient-to-r from-teal-500 to-cyan-500 py-8 lg:py-14 p-4 space-y-4 text-center h-screen lg:h-full w-full">
        <form onSubmit={handleSubmit} className="my-auto p-4 lg:p-8 rounded-xl space-y-6 bg-white shadow-xl shadow-gray-700">
          <label htmlFor="message" className="block text-gray-700">Your Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            rows="4"
            required
          />
          <button type="submit" className="bg-cyan-500 text-white px-4 py-2 rounded-md">Submit</button>
          {aiResponse && <div className="mt-4 bg-gray-100 p-4 rounded-md shadow-md"><h2 className="text-lg font-medium">AI Response:</h2><p>{aiResponse}</p></div>}
        </form>
      </div>
    </Layout>
  );
};

export default CustomerCare;
