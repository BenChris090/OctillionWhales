import { Link, NavLink } from "react-router-dom";
import { FaLock, FaWallet, FaPenAlt, FaHeadset, FaTimes, FaBars } from "react-icons/fa";
import { BiTransferAlt, BiUser } from "react-icons/bi";
import { IoIosPaper } from "react-icons/io";
import { MdOutlineExitToApp } from "react-icons/md"
import { CgProfile } from "react-icons/cg";
import { useState } from "react";


const CustomerCare = () => {
    let ICE_LOGO =  require('./ICE_LOGO.png');
    const [mNav, setmNav] = useState("none");
    const [inputs, setInputs] = useState({});
  
    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      alert(inputs);
    }

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
        <div className="loan-application flex w-full overflow-y-hidden">
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
                    <NavLink to="#"><h1 className="flex px-8 p-2 items-center"><MdOutlineExitToApp className="mr-2"/> LogOut</h1></NavLink>
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
                    <NavLink to="#"><h1 className="flex px-8 p-2 items-center"><MdOutlineExitToApp className="mr-2"/> LogOut</h1></NavLink>
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
                        <form onSubmit={handleSubmit} className="my-auto p-4 lg:p-8 rounded-xl space-y-6 lg:space-y-12 bg-cyan-700 shadow-xl shadow-gray-700">
                            <h1 className="text-xl font-bold lg:text-4xl text-white"><b>LOAN APPLICATION:</b></h1>
                            <div className="space-y-4 lg:space-y-8 px-2 lg:px-10">
                                
                            <select id="banks" class="w-full text-black border-2 border-teal-600 bg-white rounded-lg block ease-in duration-500 p-4">
                                    <option selected value="Customer Care">Receiver: Customer Care</option>
                                </select>
                                <input className="w-full text-black p-4 border-2 border-teal-600 bg-white rounded-lg ease-in duration-500" name="subject" onChange={handleChange} value={inputs.subject} type="text"
                                            placeholder="Type Your Subject"/>
                                <input className="w-full text-black p-4 border-2 border-teal-600 bg-white rounded-lg ease-in duration-500" name="complaint" onChange={handleChange} value={inputs.complaint} type="text"
                                    placeholder="Type Your Complaint"/>
                            </div>
                            <div className="px-2 lg:px-10">
                                <button
                                    className="flex justify-center text-gray-50 w-full p-4 text-lg border-2 border-teal-600 bg-teal-600 rounded-lg ease-in duration-500 mt-4"><b className="flex">APPLY FOR LOAN </b></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        );
}
 
export default CustomerCare;