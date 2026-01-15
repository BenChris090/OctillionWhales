import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router-dom';
import useFetch from './useFetch';
import Layout from './Layout'; // Import the Layout component
import Spinner from './Spinner'; // Loading spinner
import { useUser } from './UserContext'; // Import the useUser hook

import { FaCheck, FaLock, FaWallet, FaPenAlt, FaHeadset, FaTimes, FaBars } from 'react-icons/fa';
import { BiTransferAlt, BiUser } from 'react-icons/bi';
import { IoIosPaper } from 'react-icons/io';
import { MdOutlineExitToApp } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';

const Dashboard = () => {
    const { userID } = useParams();
    const navigate = useNavigate();
    const { data, error, isPending } = useFetch('/data/db.json');
    const { user, setUser } = useUser();
    const [mNav, setmNav] = useState(false);
    const [transactions, setTransactions] = useState([]);



    useEffect(() => {
        if (data && data.accounts) {
            const foundUser = data.accounts.find((account) => account.userID === userID);
            if (foundUser) {
                setUser(foundUser);
                setTransactions(foundUser.transactions || []);
                localStorage.setItem('user', JSON.stringify(foundUser));
            }
        }
    }, [data, userID, setUser]);

    useEffect(() => {
        if (!user) {
            navigate('/login');
        }
    }, [user, navigate]);

    const toggleNav = () => setmNav(!mNav);

    const lastWithdrawal = user.transactions
        .filter((transaction) => transaction.debit !== "" && transaction.status === "Success")
        .slice(-1)[0];

    const handleLogout = () => {
        const currentUser = JSON.parse(localStorage.getItem('user'));
        if (currentUser && currentUser.accountStatus === 'Active') {
            const updatedUser = { ...currentUser, accountStatus: 'Inactive' };
            localStorage.setItem('user', JSON.stringify(updatedUser));
            setUser(null);
            navigate('/');
        }
    };

    if (isPending) return <Spinner />;
    if (error) return <div>{error}</div>;
    if (!user) return <div>No user found</div>;

    return (
        <Layout pageTitle="Dashboard" pageIcon={CgProfile}>
            <div className="bg-gray-100 h-screen overflow-y-hidden w-full">
                {/* Main Content */}
                <main className="px-6 lg:px-8 py-4">
                    <div className="space-y-4">
                        <h1 className="text-2xl lg:text-3xl font-medium">Welcome, {user.accountHolderName}</h1>
                        <hr className="border-gray-300" />
                        <h2 className="text-lg lg:text-xl font-medium">Account Type: {user.accountType}</h2>
                        
                    </div><h2 className="flex items-center text-lg lg:text-xl font-medium">Account Status: {user.accountStatus} {user.accountStatus === "Active" ? <FaCheck className="ml-2 text-green-700"/> : <FaTimes className="ml-2 text-red-700"/>}</h2>

                    {/* Summary Cards */}
                    <div className="flex flex-col lg:flex-row gap-4 mt-6">
                        <div className="bg-white shadow-lg rounded-lg p-6 text-center space-y-4 flex-1">
                            <h1 className="text-3xl font-medium">{user.currencySign}{user.balance.toLocaleString()}</h1>
                            <p className="text-xl font-semibold text-cyan-900">Total Balance</p>
                        </div>
                        <div className="bg-white shadow-lg rounded-lg p-6 text-center space-y-4 flex-1">
                            <h1 className="text-3xl font-medium">{user.currencySign}{user.balance.toLocaleString()}</h1>
                            <p className="text-xl font-semibold text-green-700">Account Balance</p>
                        </div>
                        <div className="bg-white shadow-lg rounded-lg p-6 text-center space-y-4 flex-1">
                            <h1 className="text-3xl font-medium">{user.currencySign}{lastWithdrawal ? lastWithdrawal.debit.toLocaleString() : 0.00}</h1>
                            <p className="text-xl font-semibold text-red-700">Last Withdrawal</p>
                        </div>
                    </div>

                    {/* Recent Transactions Table */}
                    <div className="mt-6 max-h-full hidden lg:block">
                        <h1 className="text-3xl font-medium">Recent Transactions</h1>
                        <div className="flex overflow-x-auto overflow-y-auto">
                            <table className="min-w-full min-h-full text-sm bg-cyan-900 bg-opacity-25 border-2 border-cyan-900 table-auto divide-y-2 divide-x-2 divide-cyan-900 text-center mt-4">
                                <caption className="caption-bottom p-2">Transaction Records</caption>
                                <thead>
                                    <tr className="divide-x-2 divide-cyan-900">
                                        <th className="py-2 px-4 w-1/4">Date</th>
                                        <th className="py-2 px-8 w-1/3">Narration</th>
                                        <th className="py-2 px-4 w-1/6">Status</th>
                                        <th className="py-2 px-4 w-1/6">Reference Code</th>
                                        <th className="py-2 px-4 w-1/6">Debit (Dr)</th>
                                        <th className="py-2 px-4 w-1/6">Credit (Cr)</th>
                                        <th className="py-2 px-4 w-1/6">Balance</th>
                                    </tr>
                                </thead>
                                <tbody className="overflow-y-auto overflow-x-auto divide-y-2 divide-cyan-900"> 
                                {transactions.length === 0 ? (
                                    <tr>
                                        <td colSpan="6" className="py-2 px-8">No transactions available</td>
                                    </tr>
                                ) : (
                                    transactions.slice().reverse().map((transaction) => ( // Reverses the array by id without mutating the original array
                                    <tr key={transaction.id} className="divide-x-2 divide-y-2 divide-cyan-900">
                                        <td className="py-2 px-4">{transaction.date}</td>
                                        <td className="py-2 px-4 w-1/2">{transaction.narration}</td>
                                        <td className={`py-2 px-4 font-medium ${transaction.status === "Pending" ? "text-yellow-700" 
                                            : transaction.status === "Cancelled" ? "text-red-700" 
                                            : transaction.status === "Success" ? "text-green-700" 
                                            : "" }`}>{transaction.status}</td>
                                        <td className="py-2 px-4">{transaction.referenceCode}</td>
                                        <td className="py-2 px-4">{transaction.debit.toLocaleString()}</td>
                                        <td className="py-2 px-4">{transaction.credit.toLocaleString()}</td>
                                        <td className="py-2 px-4">{transaction.balance.toLocaleString()}</td>
                                    </tr>
                                )))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </main>
            </div>
        </Layout>
    );
};

export default Dashboard;
