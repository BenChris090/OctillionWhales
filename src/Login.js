import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import { useUser } from './UserContext.js';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import useFetch from "./useFetch.js";
import Spinner from './Spinner';

const Login = () => {
    const navigate = useNavigate();
    const { user, setUser } = useUser();

    const [userID, setUserID] = useState('');
    const [password, setPassword] = useState('');
    const { data, isPending, error } = useFetch('/data/db.json');
    
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    
    useEffect(() => {
      if (user) {
          navigate(`/dashboard/${user.userID}`);
      }
  }, [user, navigate]);

    const handleTextChange = (event) => {
        setUserID(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const togglePassword = () => {
        setShowPassword(prev => !prev);
    };

    const handleLogin = async (event) => {
        event.preventDefault();

        if (userID && password && data && data.accounts) {
            console.log('Data:', data); // Debugging
            const user = data.accounts.find((u) => u.userID === userID && u.passkey === password);

            console.log('User Found:', user); // Debugging
            
            if (user) {
                setIsLoggedIn(true);
                setUser(user);
                navigate(`/dashboard/${user.userID}`);
            } else {
                alert('Invalid username or password');
            }
        } else {
            alert('Please wait while we fetch the user data.');
        }
    };

    return (
        <div className="login items-center text-center p-10 lg:p-24 h-screen">
            {error && <div className="text-red-500">{error}</div>}
            {isPending && <Spinner />}
            {!isPending && !error && !isLoggedIn && (
                <form className="m-auto p-8 rounded-xl space-y-12 lg:space-y-8 bg-cyan-900 shadow-xl shadow-gray-700 max-w-md lg:max-w-lg">
                    <h1 className="text-4xl text-white"><b>LOGIN:</b></h1>
                    <input
                        className="w-full text-black p-4 border-2 border-teal-600 bg-white rounded-lg ease-in duration-500 mt-4"
                        onChange={handleTextChange}
                        value={userID}
                        type="text"
                        placeholder="Enter User ID"
                    />
                    <input
                        className="w-full text-black p-4 border-2 border-teal-600 bg-white rounded-lg ease-in duration-500 mt-4"
                        onChange={handlePasswordChange}
                        value={password}
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter Passkey"
                    />
                    <p className="flex text-lg font-bold justify-center items-center mt-2">
                        {showPassword ? 
                            <FaEyeSlash className="mr-2 text-2xl" onClick={togglePassword}/> :
                            <FaEye className="mr-2 text-2xl" onClick={togglePassword}/>
                        }
                        {showPassword ? "Hide Password" : "Show Password"}
                    </p>
                    <button
                        className="text-gray-50 w-full p-4 text-lg border-2 border-teal-600 bg-teal-600 rounded-lg ease-in duration-500 mt-4"
                        onClick={handleLogin}
                    >
                        <b>LOGIN</b>
                    </button>
                </form>
            )}
        </div>
    );
};

export default Login;
