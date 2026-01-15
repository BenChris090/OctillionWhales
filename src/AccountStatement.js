import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Layout from './Layout'; // Import the Layout component
import { IoIosPaper } from 'react-icons/io';
import useFetch from './useFetch'; // Custom hook for fetching data
import Spinner from './Spinner'; // Loading spinner
import { useUser } from './UserContext'; // Import the useUser hook

const AccountStatement = () => {
    const { userID } = useParams();
    const navigate = useNavigate();
    const { data, error, isPending } = useFetch('/data/db.json'); // Adjust the path to your JSON data
    const { user, setUser } = useUser();
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        if (data && data.accounts) {
            const foundUser = data.accounts.find(account => account.userID === userID);
            if (foundUser) {
                setUser(foundUser);
                localStorage.setItem('user', JSON.stringify(foundUser));
                setTransactions(foundUser.transactions || []);
            }
        }
    }, [data, userID, setUser]);

    useEffect(() => {
        if (!user) {
            navigate('/login');
        }
    }, [user, navigate]);

    if (isPending) return <Spinner />;
    if (error) return <div>{error}</div>;
    if (!user) return <div>No user found</div>;

    return (
        <Layout pageTitle="Account Statement" pageIcon={IoIosPaper}>
            <div className="flex flex-col px-4 lg:px-8 py-4 h-screen lg:h-full w-full">
                <h2 className="text-2xl lg:text-3xl font-medium">Welcome: {user.accountHolderName}</h2>
                <p className="font-medium text-lg lg:text-xl">Account Number: {user.accountNumber}</p>
                <p className="font-medium text-lg lg:text-xl">Account Balance: {user.currencySign}{user.balance.toLocaleString()}</p>
                <hr className="h-1 bg-black my-4" />
                <h3 className="text-xl font-medium">Recent Transactions:</h3>
                <div className="h-2/3 overflow-x-auto overflow-y-auto">
                    <table className="min-w-full min-h-full text-sm bg-cyan-900 bg-opacity-25 border-2 border-collapse border-cyan-900 table-auto divide-y-2 divide-x-2 divide-cyan-900 text-center">
                        <thead>
                            <tr className="divide-x-2 divide-cyan-900">
                                <th className="py-2 px-8 w-1/4">Date</th>
                                <th className="py-2 px-16 w-1/3">Narration</th>
                                <th className="py-2 px-4 w-1/6">Status</th>
                                <th className="py-2 px-8 w-1/6">Reference Code</th>
                                <th className="py-2 px-8 w-1/6">Debit (Dr)</th>
                                <th className="py-2 px-8 w-1/6">Credit (Cr)</th>
                                <th className="py-2 px-[2.2rem] w-1/6">Balance</th>
                            </tr>
                        </thead>
                        <tbody>
                            {transactions.length === 0 ? (
                                <tr>
                                    <td colSpan="6" className="py-2 px-8">No transactions available</td>
                                </tr>
                            ) : (
                                transactions.slice().reverse().map((transaction) => ( // Reverses the array by id without mutating the original array
                                    <tr key={transaction.id} className="divide-x-2 divide-y-2 divide-cyan-900">
                                        <td className="py-2 px-8">{transaction.date}</td>
                                        <td className="py-2 px-8">{transaction.narration}</td>
                                        <td className={`py-2 px-4 font-medium ${transaction.status === "Pending" ? "text-yellow-700" 
                                            : transaction.status === "Cancelled" ? "text-red-700" 
                                            : transaction.status === "Success" ? "text-green-700" 
                                            : "" }`}>{transaction.status}</td>
                                        <td className="py-2 px-8">{transaction.referenceCode}</td>
                                        <td className="py-2 px-8">{transaction.debit !== "" ? `-${user.currencySign}${transaction.debit.toLocaleString()}` : `${transaction.debit}`}</td>
                                        <td className="py-2 px-8">{transaction.credit !== "" ? `+${user.currencySign}${transaction.credit.toLocaleString()}` : `${transaction.credit}`}</td>
                                        <td className="py-2 px-[2.2rem]">{user.currencySign}{transaction.balance.toLocaleString()}</td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </Layout>
    );
};

export default AccountStatement;
