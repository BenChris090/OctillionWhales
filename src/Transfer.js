import { Link, NavLink } from "react-router-dom";
import { FaLock, FaWallet, FaPenAlt, FaHeadset, FaTimes, FaBars, FaAngleDoubleRight } from "react-icons/fa";
import { BiTransferAlt, BiUser } from "react-icons/bi";
import { IoIosPaper } from "react-icons/io";
import { MdOutlineExitToApp } from "react-icons/md"
import { CgProfile } from "react-icons/cg";
import { useState } from "react";


const Transfer = () => {
    let ICE_LOGO =  require('./ICE_LOGO.png');
    const [mNav, setmNav] = useState("none")
    // State to hold form field values
    const [formData, setFormData] = useState({
        amount: '',
        beneficiaryName: '',
        beneficiaryAcct: '',
        beneficiaryBank: '',
        narration: '',
        accType: ''
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
        alert('Form Submitted!');
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
        errors.amount = 'Enter Amount';
        }

        if (data.amount < 100) {
        errors.amount = 'The Minimum Transfer Amount is $100';
        }

        if (!data.beneficiaryName.trim()) {
        errors.beneficiaryName = 'Beneficiary Name Is Required';
        }

        if (!data.beneficiaryAcct.trim()) {
        errors.beneficiaryAcct= 'Beneficiary Account Is Required';
        }

        if (data.beneficiaryAcct.toString().length < 10) {
        errors.beneficiaryAcct= 'Account Number Is Invalid';
        }

        if (!data.beneficiaryBank.trim()) {
        errors.beneficiaryBank= 'Beneficiary Bank Is Required';
        }

        if (!data.accType.trim()) {
        errors.accType= 'Account Type Is Required';
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
        <div className="transfer flex w-full overflow-y-hidden">
            <div id="mNav-options" className="hidden z-0 fixed overflow-y-auto bg-white h-screen w-full shadow-xl">
                <div className="flex justify-between w-full px-4 py-2">
                <Link to="/" className="flex items-center w-full mx-auto lg:max-h-16"><img src={ ICE_LOGO } className="h-10 mr-3 sm:h-12 lg:h-12" alt="Logo" /><span className="self-center text-2xl font-semibold whitespace-nowrap text-cyan-500 lg:text-4xl">ICE_BERG</span></Link>
                <FaTimes className="text-2xl m-2 text-cyan-500" onClick={setNav}/>
                </div>
                <div className="profile bg-black text-md text-white font-medium space-y-2 text-center">
                    <div className="profilepic p-2">
                        <img src={ICE_LOGO} alt="profile_pic" className="h-28 border-4 border-cyan-900 m-auto rounded-full" />
                    </div>
                    <h2>USERID</h2>
                    <p>80207256</p>
                    </div>
                {/* Mobile Nav */}
                <div className="nav text-lg text-cyan-900 font-medium py-4">
                    <NavLink to="/dashboard"><h1 className="flex px-8 p-2 items-center"><CgProfile className="mr-2"/> Dashboard</h1></NavLink>
                    <NavLink to="/transfer"><h1 className="flex px-8 p-2 items-center"><BiTransferAlt className="mr-2"/> Make Transfer</h1></NavLink>
                    <NavLink to="/account-summary"><h1 className="flex px-8 p-2 items-center"><BiUser className="mr-2"/> My Account</h1></NavLink>
                    <NavLink to="/account-statement"><h1 className="flex px-8 p-2 items-center"><IoIosPaper className="mr-2"/> Account Statement</h1></NavLink>
                    <NavLink to="/change-password"><h1 className="flex px-8 p-2 items-center"><FaLock className="mr-2"/> Change Password</h1></NavLink>
                    <NavLink to="/loan-application"><h1 className="flex px-8 p-2 items-center"><FaPenAlt className="mr-2"/> Loan Application</h1></NavLink>
                    <NavLink to="/customer-care"><h1 className="flex px-8 p-2 items-center"><FaHeadset className="mr-2"/> Customer Care</h1></NavLink>
                    <NavLink to="/log-out"><h1 className="flex px-8 p-2 items-center"><MdOutlineExitToApp className="mr-2"/> LogOut</h1></NavLink>
                </div>
            </div>
            <div className="hidden h-screen lg:block lg:w-1/4 shadow-xl">
                <Link to="/" className="flex items-center w-full mx-auto lg:max-h-16"><img src={ ICE_LOGO } className="h-10 mr-3 sm:h-12 lg:h-12" alt="Logo" /><span className="self-center text-2xl font-semibold whitespace-nowrap text-cyan-500 lg:text-4xl">ICE_BERG</span></Link>
                <div className="profile bg-black text-md text-white font-medium space-y-2 text-center">
                    <div className="profilepic p-2">
                        <img src={ICE_LOGO} alt="profile_pic" className="h-28 border-4 border-cyan-900 m-auto rounded-full" />
                    </div>
                    <h2>USERID</h2>
                    <p>80207256</p>
                </div>
                {/* Desktop Nav */}
                <div className="nav text-lg text-cyan-900 font-medium py-4">
                    <NavLink to="/dashboard"><h1 className="flex px-8 p-2 items-center"><CgProfile className="mr-2"/> Dashboard</h1></NavLink>
                    <NavLink to="/transfer"><h1 className="flex px-8 p-2 items-center"><BiTransferAlt className="mr-2"/> Make Transfer</h1></NavLink>
                    <NavLink to="/account-summary"><h1 className="flex px-8 p-2 items-center"><BiUser className="mr-2"/> My Account</h1></NavLink>
                    <NavLink to="/account-statement"><h1 className="flex px-8 p-2 items-center"><IoIosPaper className="mr-2"/> Account Statement</h1></NavLink>
                    <NavLink to="/change-password"><h1 className="flex px-8 p-2 items-center"><FaLock className="mr-2"/> Change Password</h1></NavLink>
                    <NavLink to="/loan-application"><h1 className="flex px-8 p-2 items-center"><FaPenAlt className="mr-2"/> Loan Application</h1></NavLink>
                    <NavLink to="/customer-care"><h1 className="flex px-8 p-2 items-center"><FaHeadset className="mr-2"/> Customer Care</h1></NavLink>
                    <NavLink to="/log-out"><h1 className="flex px-8 p-2 items-center"><MdOutlineExitToApp className="mr-2"/> LogOut</h1></NavLink>
                </div>
            </div>
            <div className="w-full lg:w-3/4 space-y-4 items-center bg-gray-200 lg:py-10 lg:h-screen overflow-y-auto">
                <div className="text-lg w-full text-white bg-cyan-900 lg:top-0 lg:fixed font-medium justify-between lg:justify-normal lg:space-x-2 flex px-4 lg:px-8 items-center lg:h-12 my-auto">
                    <h1 className="flex p-2 items-center"><CgProfile className="mr-2"/> Make Transfer</h1>
                    <h1 className="flex lg:hidden p-2 items-center"><FaBars className="mNav text-2xl flex text-cyan-500 my-2 lg:hidden" onClick={setNav}/></h1>
                    <h1 className="hidden lg:flex pl-[28rem] p-2 items-center"><FaWallet className="mr-2"/> $467,688.00</h1>
                    <h1 className="hidden lg:flex p-2 items-center"><MdOutlineExitToApp className="mr-2"/> LogOut</h1>
                </div>
                <div className="lg:flex px-6 lg:px-8 lg:space-x-4">
                    <div className="make-transfer rounded-lg py-2 lg:p-4 space-y-4 text-center w-full">
                        <form onSubmit={handleSubmit} className="my-auto p-4 lg:p-8 rounded-xl space-y-4 bg-cyan-700 shadow-xl shadow-gray-700">
                            <h1 className="text-2xl font-bold lg:text-4xl text-white"><b>Make Transfer:</b></h1>
                            <div className="lg:flex space-y-4 lg:space-x-8 px-2 lg:px-10">
                                <input className="w-full text-black p-4 border-2 border-teal-600 bg-white rounded-lg ease-in duration-500 lg:mt-4" id="amount" name="amount" onChange={handleChange} value={formData.amount} type="number"
                                            placeholder="Amount ($)"/>
                                <input className="w-full text-black p-4 border-2 border-teal-600 bg-white rounded-lg ease-in duration-500 lg:mt-4" id="beneficiaryName" name="beneficiaryName" onChange={handleChange} value={formData.beneficiaryName} type="text"
                                    placeholder="Beneficiary Account Name"/>
                            </div>
                            <div className="flex w-full px-2 lg:px-10 justify-between">
                                {errors.amount && <p className="error w-full text-left text-red-700 font-bold">{errors.amount}</p>}
                                {errors.beneficiaryName && <p className="error w-full text-right text-red-700 font-bold">{errors.beneficiaryName}</p>}
                            </div>
                            <div className="lg:flex space-y-4 lg:space-x-8 px-2 lg:px-10">
                                <input className="w-full text-black p-4 border-2 border-teal-600 bg-white rounded-lg ease-in duration-500 lg:mt-4" id="beneficiaryAcct" name="beneficiaryAcct" onChange={handleChange} value={formData.benegiciaryAcct} type="number"
                                            placeholder="Beneficiary Account Number"/>
                                <select className="w-full text-black border-2 border-teal-600 bg-white rounded-lg block ease-in duration-500 lg:mt-4 p-4" id="beneficiaryBank" name="beneficiaryBank" onChange={handleChange} value={formData.beneficiaryBank}>
                                    <option value="" selected>Select Beneficiary Bank</option>
                                    <option value="Chase Bank">Chase Bank</option>
                                    <option value="Bank Of America">Bank Of America</option>
                                    <option value="Wells Fargo">Wells Fargo</option>
                                    <option value="Santander Consumer Bank">Santander Consumer Bank</option>
                                    <option value="Citi Bank">Citi Bank</option>
                                    <option value="M&T Bank">M&T Bank</option>
                                    <option value="Wood Forest Bank">Wood Forest Bank</option>
                                    <option value="Sun Trust Bank">Sun Trust Bank</option>
                                    <option value="First National Bank">First National Bank</option>
                                    <option value="People's United Bank">People's United Bank</option>
                                    <option value="Washington Federal">Washington Federal</option>
                                    <option value="Valley National Bank">Valley National Bank</option>
                                    <option value="Whitney Bank">Whitney Bank</option>
                                    <option value="Columbia State Bank">Columbia State Bank</option>
                                    <option value="Old National Bank">Old National Bank</option>
                                    <option value="First Tennessee Bank">First Tennessee Bank</option>
                                    <option value="NBT Bank">NBT Bank</option>
                                    <option value="First Commonwealth Bank">First Commonwealth Bank</option>
                                    <option value="Sterling National Bank">Sterling National Bank</option>
                                    <option value="Carter Bank And Trust">Carter Bank And Trust</option>
                                    <option value="Union Bank And Trust">Union Bank And Trust</option>
                                </select>
                            </div>
                            <div className="flex w-full px-2 lg:px-10 justify-between">
                                {errors.beneficiaryAcct && <p className="error w-full text-left text-red-700 font-bold">{errors.beneficiaryAcct}</p>}
                                {errors.beneficiaryBank && <p className="error w-full text-right text-red-700 font-bold">{errors.beneficiaryBank}</p>}    
                            </div>
                            <div className="lg:flex space-y-4 lg:space-x-8 px-2 lg:px-10">
                                <input className="w-full text-black p-4 border-2 border-teal-600 bg-white rounded-lg ease-in duration-500 lg:mt-4" id="narration" name="narration" onChange={handleChange} value={formData.narration} type="text"
                                            placeholder="Naration/Purpose"/>
                                <select className="w-full text-black border-2 border-teal-600 bg-white rounded-lg block ease-in duration-500 lg:mt-4 p-4" id="accType" name="accType" onChange={handleChange} value={formData.accType}>
                                    <option value="" selected>Select Account Type</option>
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
                            <div className="flex w-full px-2 lg:px-10 justify-between">
                                {errors.accType && <p className="error w-full text-right text-red-700 font-bold">{errors.accType}</p>}
                            </div>
                            <div className="px-2 lg:px-10">
                                <button
                                    className="flex justify-center text-gray-50 w-full p-4 text-lg border-2 border-teal-600 bg-teal-600 rounded-lg ease-in duration-500 mt-4"><b className="flex">MAKE TRANSFER <FaAngleDoubleRight className="m-2"/> </b></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        );
}
 
export default Transfer;