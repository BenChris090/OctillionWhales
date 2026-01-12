import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FaLock, FaAngleDoubleRight } from 'react-icons/fa';
import { useUser } from './UserContext'; // Import the useUser hook
import Layout from './Layout'; // Import the Layout component

const ChangePassword = () => {
    const { userID } = useParams();
    const navigate = useNavigate();
    const { user, setUser } = useUser();

    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleChangePassword = (e) => {
        e.preventDefault();
        if (newPassword !== confirmPassword) {
            setMessage('Passwords do not match');
            return;
        }
        if (currentPassword === user.passkey) {
            const updatedUser = { ...user, password: newPassword };
            localStorage.setItem('user', JSON.stringify(updatedUser));
            setUser(updatedUser);
            setMessage('Password changed successfully');
            navigate(`/dashboard/${userID}`);
        } else {
            setMessage('Current password is incorrect');
        }
    };

    return (
        <Layout pageTitle="Change Passkey" pageIcon={FaLock}>

            <div className="bg-gradient-to-r from-teal-500 to-cyan-500 py-8 lg:py-14 p-4 space-y-4 text-center h-screen lg:h-full w-full">
                <form onSubmit={handleChangePassword} className="my-auto p-4 lg:p-8 rounded-xl space-y-6 bg-white shadow-xl shadow-gray-700">
                    <h1 className="text-2xl font-bold lg:text-4xl text-cyan-900 mb-4">
                        <b>Change Your Passkey:</b>
                    </h1>
                    <div className="space-y-4 px-2 lg:px-10">
                        <input
                            type="password"
                            id="current-password"
                            name="current-password"
                            value={currentPassword}
                            onChange={(e) => setCurrentPassword(e.target.value)}
                            placeholder="Current Passkey"
                            className="w-full text-black p-4 border-2 border-teal-600 bg-white rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                            required
                        />
                        <input
                            type="password"
                            id="new-password"
                            name="new-password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            placeholder="New Passkey"
                            className="w-full text-black p-4 border-2 border-teal-600 bg-white rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                            required
                        />
                        <input
                            type="password"
                            id="confirm-password"
                            name="confirm-password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder="Confirm New Passkey"
                            className="w-full text-black p-4 border-2 border-teal-600 bg-white rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                            required
                        />
                    </div>

                    <div className="px-2 lg:px-10">
                        {message && (
                            <p className={`font-bold ${message.includes('successfully') ? 'text-green-700' : 'text-red-700'}`}>{message}</p>
                        )}
                    </div>

                    <div className="px-2 lg:px-10">
                        <button
                            type="submit"
                            className="flex justify-center text-gray-50 w-full p-4 text-lg border-2 border-teal-600 bg-teal-600 rounded-lg shadow-md hover:bg-teal-700 transition duration-300"
                        >
                            <b className="flex">CHANGE PASSKEY <FaAngleDoubleRight className="mx-2 my-auto" /></b>
                        </button>
                    </div>
                </form>
            </div>
        </Layout>
    );
};

export default ChangePassword;
