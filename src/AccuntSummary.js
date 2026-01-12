import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Layout from './Layout'; // Import the Layout component
import useFetch from './useFetch'; // Custom hook for fetching data
import Spinner from './Spinner'; // Loading spinner
import { useUser } from './UserContext'; // Import the useUser hook

import { FaWallet, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaTimes } from 'react-icons/fa';
import { BiUser } from 'react-icons/bi';
import { MdOutlineExitToApp, MdAccountBalance } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import { FaCheck } from 'react-icons/fa';

const AccountSummary = () => {
    const { userID } = useParams();
    const navigate = useNavigate();
    const { data, error, isPending } = useFetch('/data/db.json'); // Adjust the path to your JSON data
    const { user, setUser } = useUser();

    useEffect(() => {
        if (data && data.accounts) {
            const foundUser = data.accounts.find(account => account.userID === userID);
            if (foundUser) {
                setUser(foundUser);
                localStorage.setItem('user', JSON.stringify(foundUser));
            }
        }
    }, [data, userID, setUser]);

    useEffect(() => {
        if (!user) {
            navigate('/login');
        }
    }, [user, navigate]);

    const handleLogout = () => {
        const currentUser = JSON.parse(localStorage.getItem('user'));
        if (currentUser && currentUser.accountStatus === 'Active') {
          const updatedUser = { ...currentUser, accountStatus: 'Inactive' };
          localStorage.setItem('user', JSON.stringify(updatedUser));
          setUser(null);
        }
      };

    if (isPending) return <Spinner />;
    if (error) return <div>{error}</div>;
    if (!user) return <div>No user found</div>;

    return (
        <Layout pageTitle="Account Summary" pageIcon={BiUser}>
            <div className="bg-gray-100 min-h-screen lg:min-h-full py-6 lg:py-12">
                <div className="container mx-auto px-4">
                    {/* Account Details and Contact Information */}
                    <div className="grid gap-6 lg:grid-cols-2">
                        
                        {/* Account Details Section */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-xl font-semibold mb-4">Account Details</h2>
                            <div className="space-y-4">
                                <p className="flex items-center"><CgProfile className="mr-2 text-xl" /><strong className='mr-2'>Account Number:</strong> {user.accountNumber}</p>
                                <p className="flex items-center"><MdAccountBalance className="mr-2 text-xl" /><strong className='mr-2'>Account Type:</strong> {user.accountType}</p>
                                <p className="flex items-center"><FaWallet className="mr-2 text-xl" /><strong className='mr-2'>Account Balance:</strong> {user.currencySign}{user.balance.toLocaleString()}</p>
                                <p className="flex items-center">{user.accountStatus === "Active" ? <FaCheck className="mr-2 text-xl text-green-600" /> : <FaTimes className="mr-2 text-xl text-red-600" />}<strong className='mr-2'>Status:</strong> {user.accountStatus}</p>
                                
                            </div>
                        </div>

                        {/* Contact Information Section */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
                            <div className="space-y-4">
                                <p className="flex items-center"><FaEnvelope className="mr-2 text-xl" /><strong className='mr-2'>Email: </strong> {user.email}</p>
                                <p className="flex items-center"><FaPhoneAlt className="mr-2 text-xl" /><strong className='mr-2'>Telephone: </strong> {user.telephoneNo}</p>
                                <p className="flex items-center"><FaMapMarkerAlt className="mr-2 text-xl" /><strong className='mr-2'>Address: </strong></p>
                                <p>{user.address}, {user.city}, {user.country}</p>
                            </div>
                        </div>

                    </div>

                    {/* Logout Button */}
                    <div className="mt-6 text-center">
                        <button
                            onClick={handleLogout}
                            className="bg-red-500 text-white px-6 py-3 rounded-lg shadow-md flex items-center justify-center mx-auto transition duration-300 hover:bg-red-800"
                        >
                            <MdOutlineExitToApp className="mr-2 text-xl" />
                            Log Out
                        </button>
                    </div>

                </div>
            </div>
        </Layout>
    );
};

export default AccountSummary;
