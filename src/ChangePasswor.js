import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FaLock } from 'react-icons/fa';
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
    if (currentPassword === user.password) {
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
    <Layout pageTitle="Change Password">
      <div className="text-lg w-full text-white bg-cyan-900 font-medium flex px-4 lg:px-8 items-center lg:h-12 my-auto">
        <h1 className="flex p-2 items-center"><FaLock className="mr-2" /> Change Password</h1>
      </div>
      <div className="flex justify-center px-4 lg:px-8 py-4">
        <form onSubmit={handleChangePassword} className="space-y-4 bg-white p-6 shadow-lg rounded-lg w-full max-w-md">
          <label htmlFor="current-password" className="block text-gray-700">Current Password</label>
          <input
            type="password"
            id="current-password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
          <label htmlFor="new-password" className="block text-gray-700">New Password</label>
          <input
            type="password"
            id="new-password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
          <label htmlFor="confirm-password" className="block text-gray-700">Confirm New Password</label>
          <input
            type="password"
            id="confirm-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
          {message && <p className="text-red-500">{message}</p>}
          <button type="submit" className="bg-cyan-500 text-white px-4 py-2 rounded-md">Change Password</button>
        </form>
      </div>
    </Layout>
  );
};

export default ChangePassword;
