import { Link, NavLink } from "react-router-dom";
import { FaBars, FaChevronDown, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
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
        document.getElementById("mNav").style.display = mNav
    }
    
    return ( 
        <nav className="flex p-2 px-auto items-center justify-center bg-white">
            {/* mobile nav starts here */}
            <div id="mNav" className="h-screen w-screen hidden z-0 fixed left-0 top-0 bg-white overflow-x-hidden overflow-y-auto pt-28 ease-in duration-500">
                <FaTimes className="text-2xl text-cyan-900 absolute top-5 right-8" onClick={setNav}/>
                <NavLink to="/login" style={({ isActive }) => (isActive ? {color: '#06b6d4'} : {color: '#2F4F4F'})}  className="mt-5 text-center space-y-2 block text-xl">Internet Banking</NavLink>
                <div className="Mdropdown mt-10 text-center justify-center space-y-2 block text-xl w-full">
                    <button className="flex items-center mx-auto">Bank With Us <FaChevronDown className="my-auto ml-2"></FaChevronDown></button>
                    <div className="Mdropdown-options text-center text-cyan-900 bg-white space-y-2 py-4 px-1">
                        <p className="w-full"><NavLink to="/mobile" className="text-sm hover:text-cyan-900 ease-in duration-500  font-semibold">Mobile Banking</NavLink></p>
                        <p className="w-full"><NavLink to="/card" className="text-sm hover:text-cyan-900  ease-in duration-500 font-semibold">Cards</NavLink></p>
                        <p className="w-full"><NavLink to="/atm" className="text-sm hover:text-cyan-900 ease-in duration-500  font-semibold">ATM</NavLink></p>
                        <p className="w-full"><NavLink to="/consumer-loans" className="text-sm hover:text-cyan-900 ease-in duration-500  font-semibold">Consumer Loans</NavLink></p>
                        <p className="w-full"><NavLink to="/debit-card" className="text-sm hover:text-cyan-900 ease-in duration-500  font-semibold">Debit Card</NavLink></p>
                        <p className="w-full"><NavLink to="/fctens" className="text-sm hover:text-cyan-900 ease-in duration-500  font-semibold">FCTeNS</NavLink></p>
                        <p className="w-full"><NavLink to="/estatements" className="text-sm hover:text-cyan-900 ease-in duration-500  font-semibold">eStatements</NavLink></p>
                    </div>
                </div>
                <NavLink to="/corporate-banking" style={({ isActive }) => (isActive ? {color: '#06b6d4'} : {color: '#2F4F4F',})}  className="mt-10 text-center space-y-2 block text-xl">Corporate</NavLink>
                <NavLink to="/personal-banking" style={({ isActive }) => (isActive ? {color: '#06b6d4'} : {color: '#2F4F4F'})}  className="mt-10 text-center space-y-2 block text-xl">Personal</NavLink>
                <NavLink to="/about" style={({ isActive }) => (isActive ? {color: '#06b6d4'} : {color: '#2F4F4F'})}  className="mt-10 text-center space-y-2 block text-xl">About Us</NavLink>
            </div>
            {/* mobile nav ends here */}
            <Link to="/" className="flex pl-2 items-center"><span className="self-center text-3xl font-semibold whitespace-nowrap text-cyan-900 lg:text-4xl">OCTILLION WHALES</span></Link>
            <div className="bars space-x-2 flex items-center ml-auto">
                <FaBars className="text-2xl flex text-cyan-900 my-2 lg:hidden" onClick={setNav}/>
            </div>
            <div className="links hidden items-center text-center lg:flex lg:py-auto lg:space-x-14">
                <NavLink to="/login" style={({ isActive }) => (isActive ? {color: '#06b6d4'} : {color: 'black'})} className="text-lg hover:text-cyan-900 ease-in duration-500"><b>Internet Banking</b></NavLink>
                <div className="dropdown">
                    <button className="flex items-center"><b>Bank With Us</b> <FaChevronDown className="my-auto ml-2"></FaChevronDown></button>
                    <div className="dropdown-options w-[8rem] text-left text-cyan-900 bg-white space-y-2 py-4 px-1">
                        <p className="w-full"><NavLink to="/mobile" className="text-sm hover:text-cyan-900 ease-in duration-500  font-semibold">Mobile Banking</NavLink></p>
                        <p className="w-full"><NavLink to="/card" className="text-sm hover:text-cyan-900  ease-in duration-500 font-semibold">Cards</NavLink></p>
                        <p className="w-full"><NavLink to="/atm" className="text-sm hover:text-cyan-900 ease-in duration-500  font-semibold">ATM</NavLink></p>
                        <p className="w-full"><NavLink to="/consumer-loans" className="text-sm hover:text-cyan-900 ease-in duration-500  font-semibold">Consumer Loans</NavLink></p>
                        <p className="w-full"><NavLink to="/debit-card" className="text-sm hover:text-cyan-900 ease-in duration-500  font-semibold">Debit Card</NavLink></p>
                        <p className="w-full"><NavLink to="/fctens" className="text-sm hover:text-cyan-900 ease-in duration-500  font-semibold">FCTeNS</NavLink></p>
                        <p className="w-full"><NavLink to="/estatements" className="text-sm hover:text-cyan-900 ease-in duration-500  font-semibold">eStatements</NavLink></p>
                    </div>
                </div>
                <NavLink to="/corporate-banking" style={({ isActive }) => (isActive ? {color: '#06b6d4'} : {color: 'black'})} className="flex text-lg"><b>Corporate</b></NavLink>
                <NavLink to="/personal-banking" style={({ isActive }) => (isActive ? {color: '#06b6d4'} : {color: 'black'})} className="text-lg"><b>Personal</b></NavLink>
                <NavLink to="/about" style={({ isActive }) => (isActive ? {color: '#06b6d4'} : {color: 'black'})} className="rounded-3xl px-4 text-lg"><b>About Us</b></NavLink>
            </div>
        </nav>
     );
}
 
export default Navbar;