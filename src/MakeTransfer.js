import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FaAngleDoubleRight, FaCheck } from 'react-icons/fa';
import { BiTransferAlt } from 'react-icons/bi';
import { useUser } from './UserContext'; // Import the useUser hook
import Layout from './Layout'; // Import the Layout component
import useFetch from './useFetch'; // Custom hook for fetching data
import Spinner from './Spinner';
import { MdOutlineExitToApp } from 'react-icons/md';

const MakeTransfer = () => {
    const { userID } = useParams();
    const navigate = useNavigate();
    const { user, setUser } = useUser();
    const [mNav, setmNav] = useState(false);
    const [formData, setFormData] = useState({
        amount: '',
        beneficiaryName: '',
        beneficiaryAcct: '',
        beneficiaryBank: '',
        narration: '',
        accType: ''
    });
    const [message, setMessage] = useState('');
    const [accounts, setAccounts] = useState([]);
    const [errors, setErrors] = useState({});
    const { data, error, isPending } = useFetch('/data/db.json'); // Fetch data to validate recipient ID

    useEffect(() => {
        if (data && data.accounts) {
            setAccounts(data.accounts);
        }
    }, [data]);

    useEffect(() => {
        if (data && data.accounts) {
            const foundUser = data.accounts.find((account) => account.userID === userID);
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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };


    const validateForm = () => {
        const newErrors = {};
        if (!formData.amount || formData.amount <= 0) newErrors.amount = 'Amount must be greater than zero';
        if (formData.amount > user.balance) newErrors.amount = 'Insufficient balance';
        if (!accounts.find(account => account.accountNumber === formData.beneficiaryAcct)) newErrors.beneficiaryAcct = 'Beneficiary not found';
        if (!formData.amount || !formData.beneficiaryName || !formData.beneficiaryAcct || !formData.beneficiaryBank || !formData.accType) {
            newErrors.form = 'All fields are required';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            const Beneficiary = accounts.find(account => account.accountNumber === formData.beneficiaryAcct);
            if (Beneficiary) {
                const updatedUser = { ...user, balance: user.balance - parseFloat(formData.amount) };
                const updatedRecipient = { ...Beneficiary, balance: Beneficiary.balance + parseFloat(formData.amount) };
                const updatedAccounts = accounts.map(account =>
                    account.userID === user.userID ? updatedUser :
                    account.userID === Beneficiary.userID ? updatedRecipient : account
                );
                
                setMessage('Transfer Successful');
                localStorage.setItem('user', JSON.stringify(updatedUser));
                // Ideally, send updatedAccounts to server to persist changes

                setUser(updatedUser);
                setTimeout (() => {
                navigate(`/dashboard/${userID}`);
                }, 3000);
            } else {
                setErrors(prev => ({ ...prev, beneficiaryAcct: 'Beneficiary not found' }));
            }
        }
    };

    const toggleNav = () => setmNav(!mNav);

    const handleLogout = () => {
        const currentUser = JSON.parse(localStorage.getItem('user'));
        if (currentUser && currentUser.accountStatus === 'Active') {
            const updatedUser = { ...currentUser, accountStatus: 'Inactive' };
            localStorage.setItem('user', JSON.stringify(updatedUser));
            setUser(null);
            navigate('/');
        }
    };

    // if (isPending) return <Spinner/>;
    if (error) return <div>{error}</div>;

    return (
        <Layout pageTitle="Make Transfer" pageIcon={BiTransferAlt}>
            <div className="make-transfer py-8 lg:py-auto px-4 space-y-4 text-center h-screen lg:h-full w-full bg-gradient-to-r from-teal-500 to-cyan-500">
                <form onSubmit={handleSubmit} className="my-auto p-4 lg:p-8 rounded-xl space-y-6 bg-white shadow-xl shadow-gray-700">
                    <h1 className="text-2xl font-bold lg:text-4xl text-cyan-900 mb-4">
                        <b>Make Transfer:</b>
                    </h1>
                    <div className="lg:flex space-y-4 lg:space-y-0 lg:space-x-8 px-2 lg:px-10">
                        <div className="w-full lg:w-1/2 space-y-4">
                            <input
                                className="w-full text-black p-4 border-2 border-teal-600 bg-white rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                                id="amount"
                                name="amount"
                                onChange={handleChange}
                                value={formData.amount}
                                type="number"
                                placeholder="Amount ($)"
                                required
                            />
                            <input
                                className="w-full text-black p-4 border-2 border-teal-600 bg-white rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                                id="beneficiaryName"
                                name="beneficiaryName"
                                onChange={handleChange}
                                value={formData.beneficiaryName}
                                type="text"
                                placeholder="Beneficiary Account Name"
                                required
                            />
                        </div>
                        <div className="w-full lg:w-1/2 space-y-4">
                            <input
                                className="w-full text-black p-4 border-2 border-teal-600 bg-white rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                                id="beneficiaryAcct"
                                name="beneficiaryAcct"
                                onChange={handleChange}
                                value={formData.beneficiaryAcct}
                                type="number"
                                placeholder="Beneficiary Account Number"
                                required
                            />
                            <select
                                className="w-full text-black p-4 border-2 border-teal-600 bg-white rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                                id="beneficiaryBank"
                                name="beneficiaryBank"
                                onChange={handleChange}
                                value={formData.beneficiaryBank}
                                required
                            >
                                <option value="" disabled>Select Beneficiary Bank</option>
                                <option value="Octillion Whales Bank">Octillion Whales Bank</option>
                                <option value="Chase Bank">Chase Bank</option>
                                <option value="Bank Of America">Bank Of America</option>
                                {/* Add other options here */}
                            </select>
                        </div>
                    </div>
                    <div className="w-full px-2 lg:px-10">
                        {errors.amount && <p className="text-red-700 font-bold">{errors.amount}</p>}
                        {errors.beneficiaryName && <p className="text-red-700 font-bold">{errors.beneficiaryName}</p>}
                        {errors.beneficiaryAcct && <p className="text-red-700 font-bold">{errors.beneficiaryAcct}</p>}
                        {errors.beneficiaryBank && <p className="text-red-700 font-bold">{errors.beneficiaryBank}</p>}
                        {errors.accType && <p className="text-red-700 font-bold">{errors.accType}</p>}
                        {errors.form && <p className="text-red-700 font-bold">{errors.form}</p>}
                    </div>
                    <div className="lg:flex space-y-4 lg:space-y-0 lg:space-x-8 px-2 lg:px-10">
                        <div className="w-full lg:w-1/2 space-y-4">
                            <input
                                className="w-full text-black p-4 border-2 border-teal-600 bg-white rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                                id="narration"
                                name="narration"
                                onChange={handleChange}
                                value={formData.narration}
                                type="text"
                                placeholder="Narration/Purpose"
                            />
                        </div>
                        <div className="w-full lg:w-1/2 space-y-4">
                            <select
                                className="w-full text-black p-4 border-2 border-teal-600 bg-white rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                                id="accType"
                                name="accType"
                                onChange={handleChange}
                                value={formData.accType}
                                required
                            >
                                <option value="" disabled>Select Account Type</option>
                                <option value="Savings Account">Savings Account</option>
                                <option value="Current Account">Current Account</option>
                                <option value="Checking Account">Checking Account</option>
                                <option value="Fixed Deposit">Fixed Deposit</option>
                                <option value="Non Resident">Non Resident</option>
                                <option value="Online Banking">Online Banking</option>
                                <option value="Domiciliary Account">Domiciliary Account</option>
                                <option value="Joint Account">Joint Account</option>
                            </select>
                        </div>
                    </div>
                    {message && <div className="flex text-green-700 text-center px-auto justify-center place-content-center font-bold">{message} <FaCheck className="mx-2 my-auto"/></div>}
                    <div className="px-2 lg:px-10">
                        <button
                            type="submit"
                            className="flex justify-center text-gray-50 w-full p-4 text-lg border-2 border-teal-600 bg-teal-600 rounded-lg shadow-md hover:bg-teal-700 transition duration-300"
                        >
                            <b className="flex py-auto">MAKE TRANSFER <FaAngleDoubleRight className="mx-2 my-auto" /></b>
                        </button>
                    </div>
                </form>
            </div>
        </Layout>
    );
};

export default MakeTransfer;
