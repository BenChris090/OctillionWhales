import { Link, NavLink } from "react-router-dom";
import { FaLock, FaWallet, FaPenAlt, FaHeadset, FaTimes, FaBars } from "react-icons/fa";
import { BiTransferAlt, BiUser } from "react-icons/bi";
import { IoIosPaper } from "react-icons/io";
import { MdOutlineExitToApp } from "react-icons/md"
import { CgProfile } from "react-icons/cg";
import { useState } from "react";
import Layout from "./Layout";


const LoanApplication = () => {
    let ICE_LOGO =  require('./ICE_LOGO.png');
    const [mNav, setmNav] = useState("none");
    // State to hold form field values
    const [formData, setFormData] = useState({
        receiver: '',
        amount: '',
        narration: ''
    });
    // State to track form validation errors
    const [errors, setErrors] = useState({});

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Perform form validation before submitting
        const validationErrors = validateForm(formData);

        if (Object.keys(validationErrors).length === 0) {
        // If there are no validation errors, submit the form (you can implement form submission logic here)
        alert('Loan Request Submitted!');
        } else {
        // If there are validation errors, set the errors state to display them to the user
        setErrors(validationErrors);
        }
    };
  
    const handleChange = (event) => {
      const { name, value }  = event.target;
      setFormData({...formData, [name]: value})
    }

    // Function to validate the form fields
    const validateForm = (data) => {
        const errors = {};

        // Check for required fields
        if (!data.amount.trim()) {
        errors.amount = 'Amount Is Required';
        }

        if (data.amount < 100) {
        errors.amount = 'The Minimum Loan Amount is $100';
        }

        if (data.amount > 500) {
            errors.amount = 'The Maximum Loan Amount is $500';
        }

        if (!data.narration.trim()) {
        errors.narration = 'Narration Is Required';
        }
        
        // Add more validation rules as needed (e.g., email format validation)

        return errors;
    };

    const toggleNav = () => {
        if (mNav === "none"){
            setmNav("block")
        }else{
            setmNav("none")
        };
    }

    const setNav = () => {
        toggleNav()
        document.getElementById("mNav-options").style.display = mNav
    }

    return (
        <Layout pageTitle="Loan Application" pageIcon={FaPenAlt}>
        <div className="bg-gradient-to-r from-teal-500 to-cyan-500 lg:py-auto px-4 py-8 space-y-4 text-center h-screen lg:h-full w-full">
            <form onSubmit={handleSubmit} className="my-auto p-4 lg:p-8 rounded-xl space-y-6 bg-white shadow-xl shadow-gray-700">
                <h1 className="text-xl font-bold lg:text-4xl text-white"><b>LOAN APPLICATION:</b></h1>
                <div className="space-y-4 lg:space-y-8 px-2 lg:px-10">
                    
                <select id="banks" class="w-full text-black border-2 border-teal-600 bg-white rounded-lg block ease-in duration-500 p-4">
                        <option selected value="Customer Care">Receiver: Customer Care</option>
                    </select>
                    <input className="w-full text-black p-4 border-2 border-teal-600 bg-white rounded-lg ease-in duration-500" id="amount" name="amount" onChange={handleChange} value={formData.amount} type="number"
                                placeholder="Amount ($)"/>
                    {errors.amount && <p className="error text-red-700 font-bold">{errors.amount}</p>}
                    <input className="w-full text-black p-4 border-2 border-teal-600 bg-white rounded-lg ease-in duration-500" id="narration" name="narration" onChange={handleChange} value={formData.narration} type="text"
                        placeholder="Naration/Purpose"/>
                    {errors.narration && <p className="error text-red-700 font-bold">{errors.narration}</p>}
                </div>
                <div className="px-2 lg:px-10">
                    <button
                        className="flex justify-center text-gray-50 w-full p-4 text-lg border-2 border-teal-600 bg-teal-600 rounded-lg ease-in duration-500 mt-4"><b className="flex">APPLY FOR LOAN </b></button>
                </div>
            </form>
        </div>
        </Layout>
        );
}
 
export default LoanApplication;