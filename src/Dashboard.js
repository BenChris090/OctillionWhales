import { Link, NavLink, useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaCheck, FaLock, FaWallet, FaPenAlt, FaHeadset, FaTimes, FaBars } from 'react-icons/fa';
import { BiTransferAlt, BiUser } from 'react-icons/bi';
import { IoIosPaper } from 'react-icons/io';
import { MdOutlineExitToApp } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import useFetch from './useFetch';
import ICE_LOGO from './ICE_LOGO.png'; // Importing image
import Spinner from './Spinner';

const Dashboard = () => {
  const { userID } = useParams();
  const navigate = useNavigate();
  const { data, error, isPending } = useFetch('/data/db.json');
  const [user, setUser] = useState(null);
  const [mNav, setmNav] = useState(false);

  useEffect(() => {
    if (data && data.accounts) {
      const foundUser = data.accounts.find((account) => account.userID === userID);
      setUser(foundUser);
    }
  }, [data, userID]);

  const toggleNav = () => {
    setmNav(!mNav);
  };

  const handleLogout = async () => {
    if (user && user.accountStatus === 'Active') {
      const updatedUser = { ...user, accountStatus: 'Inactive' };

      try {
        const response = await fetch(`/api/users/${user.userID}`, { // Adjust endpoint for backend
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedUser),
        });

        if (response.ok) {
          navigate('/');
        } else {
          console.error('Failed to update data');
        }
      } catch (error) {
        console.error('Error making the API call:', error);
      }
    }
  };

  if (isPending) return <Spinner />
  if (error) return <div>{error}</div>;
  if (!user) return <div>No user found</div>;

  return (
    <div className="flex w-full overflow-y-hidden">
      <div className={`z-0 fixed overflow-y-auto bg-white h-screen w-full shadow-xl ${mNav ? 'block' : 'hidden'}`} id="mNav-options">
        <div className="flex justify-between w-full px-4 py-2">
          <Link to="/" className="flex items-center w-full mx-auto lg:max-h-16">
            <img src={ICE_LOGO} className="h-10 mr-3 sm:h-12 lg:h-12" alt="Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-cyan-500 lg:text-4xl">ICE_BERG</span>
          </Link>
          <FaTimes className="text-2xl m-2 text-cyan-500" onClick={toggleNav} />
        </div>
        <div className="profile bg-black text-md text-white font-medium space-y-2 text-center">
          <div className="profilepic p-2">
            <img src={ICE_LOGO} alt="profile_pic" className="h-28 border-4 border-cyan-900 m-auto rounded-full" />
          </div>
          <h2>USERID</h2>
          <p>{user.userID}</p>
        </div>
        <div className="nav text-lg text-cyan-900 font-medium">
          <NavLink to={`/dashboard/${user.userID}`}><h1 className="flex px-8 p-2 items-center"><CgProfile className="mr-2" /> Dashboard</h1></NavLink>
          <NavLink to={`/transfer/${user.userID}`}><h1 className="flex px-8 p-2 items-center"><BiTransferAlt className="mr-2" /> Make Transfer</h1></NavLink>
          <NavLink to={`/account-summary/${user.userID}`}><h1 className="flex px-8 p-2 items-center"><BiUser className="mr-2" /> My Account</h1></NavLink>
          <NavLink to={`/account-statement/${user.userID}`}><h1 className="flex px-8 p-2 items-center"><IoIosPaper className="mr-2" /> Account Statement</h1></NavLink>
          <NavLink to={`/change-password/${user.userID}`}><h1 className="flex px-8 p-2 items-center"><FaLock className="mr-2" /> Change Password</h1></NavLink>
          <NavLink to={`/loan-application/${user.userID}`}><h1 className="flex px-8 p-2 items-center"><FaPenAlt className="mr-2" /> Loan Application</h1></NavLink>
          <NavLink to={`/customer-care/${user.userID}`}><h1 className="flex px-8 p-2 items-center"><FaHeadset className="mr-2" /> Customer Care</h1></NavLink>
          <button className="flex px-8 p-2 items-center" onClick={handleLogout}><MdOutlineExitToApp className="mr-2" /> LogOut</button>
        </div>
      </div>
      <div className="hidden h-screen lg:block lg:w-1/4 shadow-xl">
        <Link to="/" className="flex items-center w-full mx-auto lg:max-h-16">
          <img src={ICE_LOGO} className="h-10 mr-3 sm:h-12 lg:h-12" alt="Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-cyan-500 lg:text-4xl">ICE_BERG</span>
        </Link>
        <div className="profile bg-black text-md text-white font-medium space-y-2 text-center">
          <div className="profilepic p-2">
            <img src={ICE_LOGO} alt="profile_pic" className="h-28 border-4 border-cyan-900 m-auto rounded-full" />
          </div>
          <h2>USERID</h2>
          <p>{user.userID}</p>
        </div>
        <div className="nav text-lg text-cyan-900 font-medium">
          <NavLink to={`/dashboard/${user.userID}`}><h1 className="flex px-8 p-2 items-center"><CgProfile className="mr-2" /> Dashboard</h1></NavLink>
          <NavLink to={`/transfer/${user.userID}`}><h1 className="flex px-8 p-2 items-center"><BiTransferAlt className="mr-2" /> Make Transfer</h1></NavLink>
          <NavLink to={`/account-summary/${user.userID}`}><h1 className="flex px-8 p-2 items-center"><BiUser className="mr-2" /> My Account</h1></NavLink>
          <NavLink to={`/account-statement/${user.userID}`}><h1 className="flex px-8 p-2 items-center"><IoIosPaper className="mr-2" /> Account Statement</h1></NavLink>
          <NavLink to={`/change-password/${user.userID}`}><h1 className="flex px-8 p-2 items-center"><FaLock className="mr-2" /> Change Password</h1></NavLink>
          <NavLink to={`/loan-application/${user.userID}`}><h1 className="flex px-8 p-2 items-center"><FaPenAlt className="mr-2" /> Loan Application</h1></NavLink>
          <NavLink to={`/customer-care/${user.userID}`}><h1 className="flex px-8 p-2 items-center"><FaHeadset className="mr-2" /> Customer Care</h1></NavLink>
          <button className="flex px-8 p-2 items-center" onClick={handleLogout}><MdOutlineExitToApp className="mr-2" /> LogOut</button>
        </div>
      </div>
      <div className="w-full lg:w-3/4 space-y-4 items-center bg-gray-200 lg:h-screen overflow-y-auto">
        <div className="text-lg w-full text-white bg-cyan-900 font-medium justify-between lg:justify-normal lg:space-x-2 flex px-4 lg:px-8 items-center lg:h-12 my-auto">
          <h1 className="flex p-2 items-center"><CgProfile className="mr-2" /> Dashboard</h1>
          <h1 className="flex lg:hidden p-2 items-center"><FaBars className="mNav text-2xl flex text-cyan-500 my-2 lg:hidden" onClick={toggleNav} /></h1>
          <h1 className="hidden lg:flex pl-[32rem] p-2 items-center"><FaWallet className="mr-2" /> {user.currencySign}{user.balance}</h1>
          <h1 className="hidden lg:flex p-2 items-center"><MdOutlineExitToApp className="mr-2" /> LogOut</h1>
        </div>
        <div className="space-y-2 px-6 lg:px-8 py-4">
          <h1 className="text-2xl lg:text-3xl font-medium">Welcome: {user.accountHolderName}</h1>
          <hr className="h-1 bg-black" />
          <h2 className="text-lg lg:text-xl font-medium">Account Type: {user.accountType}</h2>
          <h2 className="flex items-center text-lg lg:text-xl font-medium">Account Status: {user.accountStatus} <FaCheck className="ml-2 text-green-700" /></h2>
        </div>
        <div className="px-4 space-y-4 lg:flex lg:px-8 lg:space-x-4 lg:space-y-0">
          <div className="totbalance text-center items-center bg-white shadow-2xl rounded-lg p-4 space-y-4 divide-y-2 divide-cyan-700 w-full lg:w-1/3">
            <h1 className="text-3xl font-medium m-8">{user.currencySign}{user.balance}</h1>
            <p className="text-xl text-cyan-700 m-4">Total Balance</p>
          </div>
          <div className="accbalance text-center items-center bg-white shadow-2xl rounded-lg p-4 space-y-4 divide-y-2 divide-green-700 w-full lg:w-1/3">
            <h1 className="text-3xl font-medium m-8">{user.currencySign}{user.balance}</h1>
            <p className="text-xl text-green-700 m-4">Account Balance</p>
          </div>
          <div className="lstwithdrawal text-center items-center shadow-2xl bg-white rounded-lg p-4 space-y-4 divide-y-2 divide-red-700 w-full lg:w-1/3">
            <h1 className="text-3xl font-medium m-8">{user.currencySign}0.00</h1>
            <p className="text-xl text-red-700 m-4">Last Withdrawal</p>
          </div>
        </div>
        <div className="hidden lg:table w-full px-8 space-y-4">
          <h1 className="text-3xl font-medium mt-4">Recent Transactions:</h1>
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
                <td>{user.balance}</td>
                <td>{user.balance}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
