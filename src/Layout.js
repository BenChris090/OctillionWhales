import { Link, NavLink } from 'react-router-dom';
import { FaCheck, FaLock, FaWallet, FaPenAlt, FaHeadset, FaTimes, FaBars } from 'react-icons/fa';
import { BiTransferAlt, BiUser } from 'react-icons/bi';
import { IoIosPaper } from 'react-icons/io';
import { MdOutlineExitToApp } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import Cote_De_Pablo from "./Cote_De_Pablo.jpg"; // Importing image
import Joshua_E_Bryan from "./Joshua_E_Bryan.jpg";
import JASON_HARRINGTON from "./jason_harrington.jpg"
import AMBER_MARSHALL from "./Amber_Marshall.jpg"
import KEVIN_M_HUNT from "./Kevin_M_Hunt.jpeg"
import AARON_D_JOHNSON from "./Aaron_D_Johnson.jpeg"
import { useState } from 'react';
import { useUser } from './UserContext'; // Import the useUser hook

const Layout = ({ children, pageTitle, pageIcon: PageIcon }) => {
  const { user, setUser } = useUser();
  const [mNav, setmNav] = useState(false);
  const pic = user.accountHolderName
  const imgs = {
    "Cote De Pablo": Cote_De_Pablo,
    "Joshua E Bryan": Joshua_E_Bryan,
    "Jason Harrington": JASON_HARRINGTON,
    "Amber Marshall": AMBER_MARSHALL,
    "Kevin M. Hunt": KEVIN_M_HUNT,
    "Aaron D. Johnson" : AARON_D_JOHNSON,
  }
  

  const toggleNav = () => setmNav(!mNav);

  const handleLogout = () => {
    const currentUser = JSON.parse(localStorage.getItem('user'));
    if (currentUser && currentUser.accountStatus === 'Active') {
      const updatedUser = { ...currentUser, accountStatus: 'Inactive' };
      localStorage.setItem('user', JSON.stringify(updatedUser));
      setUser(null);
    }
  };

  return (
    <div className="flex w-full h-screen overflow-y-hidden">
      {/* Mobile Navigation */}
      <div className={`z-0 fixed  bg-white h-screen w-full shadow-xl ${mNav ? 'block' : 'hidden'}`} id="mNav-options">
        <div className="flex items-center justify-around w-full p-3 py-4">
          <Link to="/" className="flex items-center w-full m-auto lg:max-h-16">
            <span className="self-center px-2 text-xl font-semibold whitespace-nowrap text-cyan-900 lg:text-4xl">OCTILLION WHALES</span>
          </Link>
          <FaTimes className="text-2xl m-2 text-cyan-900" onClick={toggleNav} />
        </div>

        <div className="profile py-4 lg:py-0 bg-black text-md text-white font-medium space-y-2 text-center">
          <div className="profilepic p-4">
            <img src={imgs[pic]} alt="profile_pic" className="h-28 border-4 border-cyan-900 m-auto rounded-full" />
          </div>
          <h2>USERID</h2>
          <p>{user.userID}</p>
        </div>

        <div className="nav py-4 space-y-4 text-cyan-900 font-medium">
          <NavLink to={`/dashboard/${user.userID}`}><h1 className="flex text-2xl px-8 p-2 items-center"><CgProfile className="text-3xl mr-2" /> Dashboard</h1></NavLink>
          <NavLink to={`/transfer/${user.userID}`}><h1 className="flex text-2xl px-8 p-2 items-center"><BiTransferAlt className="text-3xl mr-2" /> Make Transfer</h1></NavLink>
          <NavLink to={`/account-summary/${user.userID}`}><h1 className="flex text-2xl px-8 p-2 items-center"><BiUser className="text-3xl mr-2" /> My Account</h1></NavLink>
          <NavLink to={`/account-statement/${user.userID}`}><h1 className="flex text-2xl px-8 p-2 items-center"><IoIosPaper className="text-3xl mr-2" /> Account Statement</h1></NavLink>
          <NavLink to={`/change-passkey/${user.userID}`}><h1 className="flex text-2xl px-8 p-2 items-center"><FaLock className="text-3xl mr-2" /> Change Passkey</h1></NavLink>
          <NavLink to={`/loan-application/${user.userID}`}><h1 className="flex text-2xl px-8 p-2 items-center"><FaPenAlt className="text-3xl mr-2" /> Loan Application</h1></NavLink>
          <NavLink to={`/customer-care/${user.userID}`}><h1 className="flex text-2xl px-8 p-2 items-center"><FaHeadset className="text-3xl mr-2" /> Customer Care</h1></NavLink>
          <button className="flex text-2xl px-8 p-2 items-center" onClick={handleLogout}><MdOutlineExitToApp className="text-3xl mr-2" /> Log Out</button>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden h-screen overflow-y-hidden lg:block lg:w-1/4 shadow-xl">
        <Link to="/" className="flex items-center w-full mx-auto py-2 lg:max-h-16">
          <span className="self-center PX-2 mx-auto font-semibold whitespace-nowrap text-cyan-900 text-3xl">OCTILLION WHALES</span>
        </Link>
        <div className="profile bg-black text-md text-white font-medium space-y-2 text-center">
          <div className="profilepic p-2">
            <img src={imgs[pic]} alt="profile_pic" className="h-28 w-28 border-4 border-cyan-900 m-auto rounded-full" />
          </div>
          <h2>USERID</h2> 
          <p>{user.userID}</p>
        </div>
        <div className="nav text-lg text-cyan-900 font-medium">
          <NavLink to={`/dashboard/${user.userID}`}><h1 className="flex px-8 p-2 items-center"><CgProfile className="mr-2" /> Dashboard</h1></NavLink>
          <NavLink to={`/transfer/${user.userID}`}><h1 className="flex px-8 p-2 items-center"><BiTransferAlt className="mr-2" /> Make Transfer</h1></NavLink>
          <NavLink to={`/account-summary/${user.userID}`}><h1 className="flex px-8 p-2 items-center"><BiUser className="mr-2" /> My Account</h1></NavLink>
          <NavLink to={`/account-statement/${user.userID}`}><h1 className="flex px-8 p-2 items-center"><IoIosPaper className="mr-2" /> Account Statement</h1></NavLink>
          <NavLink to={`/change-passkey/${user.userID}`}><h1 className="flex px-8 p-2 items-center"><FaLock className="mr-2" /> Change Passkey</h1></NavLink>
          <NavLink to={`/loan-application/${user.userID}`}><h1 className="flex px-8 p-2 items-center"><FaPenAlt className="mr-2" /> Loan Application</h1></NavLink>
          <NavLink to={`/customer-care/${user.userID}`}><h1 className="flex px-8 p-2 items-center"><FaHeadset className="mr-2" /> Customer Care</h1></NavLink>
          <button className="flex px-8 p-2 items-center" onClick={handleLogout}><MdOutlineExitToApp className="mr-2" /> Log Out</button>
        </div>
      </div>
      <div className="block w-screen lg:w-3/4">
        {/* Page Header */}
        <div className="w-full overflow-y-hidden bg-cyan-900 text-white flex items-center justify-between px-4 lg:px-8 py-4 lg:max-h-12">
            <div className="flex items-center">
            {PageIcon && <PageIcon className="text-3xl mr-2" />}
            <h1 className="text-2xl font-semibold">{pageTitle}</h1>
            </div>
            <div className="flex items-center space-x-4">
            <h1 className="hidden lg:flex items-center text-lg">
                <FaWallet className="mr-2" />
                {user.currencySign}{user.balance.toLocaleString()}
            </h1>
            <button onClick={toggleNav} className="lg:hidden text-2xl">
                <FaBars className={`text-white ${mNav ? 'hidden' : 'block'}`} />
            </button>
            <button onClick={handleLogout} className="hidden lg:flex items-center text-lg">
                <MdOutlineExitToApp className="mr-2" /> Log Out
            </button>
            </div>
        </div>

        {/* Main Content */}
        <div className="w-full space-y-4 bg-gray-200 lg:h-full overflow-y-auto">
            {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
