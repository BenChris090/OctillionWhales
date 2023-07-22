import { Link, NavLink } from "react-router-dom";
import { FaCheck, FaLock, FaWallet, FaPenAlt, FaHeadset, FaTimes, FaBars } from "react-icons/fa";
import { BiTransferAlt, BiUser } from "react-icons/bi";
import { IoIosPaper } from "react-icons/io";
import { MdOutlineExitToApp } from "react-icons/md"
import { CgProfile } from "react-icons/cg";
import { useState } from "react";

const AccountStatement = () => {
    let ICE_LOGO =  require('./ICE_LOGO.png');
    const [mNav, setmNav] = useState("none")

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
        <div className="acct-statement flex h-screen w-full overflow-y-hidden">
            <div id="mNav-options" className="hidden z-0 fixed overflow-y-auto bg-white h-screen w-full shadow-xl">
                <div className="flex justify-between w-full px-4 py-2">
                <Link to="/" className="flex items-center lg:w-full lg:mx-auto lg:max-h-16"><img src={ ICE_LOGO } className="h-10 mr-3 sm:h-12 lg:h-12" alt="Logo" /><span className="lg:self-center text-2xl font-semibold whitespace-nowrap text-cyan-500 lg:text-4xl">ICE_BERG</span></Link>
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
            <div className="w-full h-full lg:w-3/4 space-y-4 items-center bg-gray-200 lg:py-10 lg:h-screen overflow-y-auto">
                <div className="text-lg w-full text-white bg-cyan-900 lg:top-0 lg:fixed font-medium justify-between lg:justify-normal lg:space-x-2 flex px-4 lg:px-8 items-center lg:h-12 my-auto">
                    <h1 className="flex p-2 items-center"><CgProfile className="mr-2"/> Account Statement</h1>
                    <h1 className="flex lg:hidden p-2 items-center"><FaBars className="mNav text-2xl flex text-cyan-500 my-2 lg:hidden" onClick={setNav}/></h1>
                    <h1 className="hidden lg:flex pl-[28rem] p-2 items-center"><FaWallet className="mr-2"/> $467,688.00</h1>
                    <h1 className="hidden lg:flex p-2 items-center"><MdOutlineExitToApp className="mr-2"/> LogOut</h1>
                </div>
                <div className="space-y-2 px-6 lg:px-8 py-4">
                    <h1 className="text-2xl lg:text-3xl font-medium">Welcome: Jayden Davidson</h1>
                    <hr className=" h-1 bg-black" />
                    <h2 className="text-lg lg:text-xl font-medium">Account Type: Current Account</h2>
                    <h2 className="flex items-center text-lg lg:text-xl font-medium">Account Status: Active <FaCheck className="ml-2 text-green-700"/></h2>
                </div>
                <div className="hidden lg:table w-full px-6 lg:px-8 space-y-4">
                    <h1 className="text-2xl font-medium mt-4">Account Statements:</h1>
                    <table className="w-full text-sm bg-cyan-900 bg-opacity-25 border-2 border-collapse border-cyan-900 table-auto divide-y-2 divide-x-2 divide-cyan-900 text-center">
                        <caption className="caption-bottom p-2">
                        This is Record 1 to 1 from total 1
                        </caption>
                        <thead>
                            <tr className="divide-x-2 divide-cyan-900">
                                <th className="py-2 px-8">Date</th>
                                <th className="py-2 px-16">Narration</th> 
                                <th className="py-2 px-8">Reference Code</th>
                                <th className="py-2 px-8">Debit (Dr)</th> 
                                <th className="py-2 px-8">Credit (Cr)</th>
                                <th className="py-2 px-[2.2rem]">Balance</th>  
                            </tr>  
                        </thead>
                        <tbody>
                            <tr className="divide-x-2 divide-cyan-900">
                                <td>05-08-2022</td>
                                <td>Deposit</td>
                                <td>T20/TRS/70681</td>
                                <td>0.00</td>
                                <td>467,688.00</td>
                                <td>467,688.00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="table lg:hidden w-screen px-6 pb-4 mx-auto lg:px-8 space-y-4 overflow-x-auto">
                    <h1 className="text-xl lg:text-2xl font-medium mt-4">Account Statements:</h1>
                    <table className="text-sm bg-cyan-900 bg-opacity-25 border-2 border-collapse border-cyan-900 table-auto divide-y-2 divide-x-2 divide-cyan-900 text-center">
                        <caption className="caption-bottom p-2">
                        This is Record 1 to 1 from total 1
                        </caption>
                        <thead>
                            <tr className="divide-x-2 divide-cyan-900">
                                <th className="py-2 px-2">Date</th>
                                <th className="py-2 px-2">Narration</th>
                                <th className="py-2 px-2">Amount ($)</th>
                                <th className="py-2 px-2">Balance</th>  
                            </tr>  
                        </thead>
                        <tbody>
                            <tr className="divide-x-2 divide-cyan-900">
                                <td>05-08-2022</td>
                                <td>Deposit</td>
                                <td>467,688.00</td>
                                <td>467,688.00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

     );
}
 
export default AccountStatement;