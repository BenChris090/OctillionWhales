import Topbar from "./Topbar";
import Navbar from "./Navbar";
import FootBar from "./FootBar";
import { Link } from "react-router-dom";
import { FaStar, FaAt, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"

const Atm = () => {
    return ( 
        <div className="card">
            <Topbar/>
            <Navbar/>
            <div className="header text-white px-6 lg:px-24 py-10 bg-[url('./mobileBankpg.jpg')] bg-opacity-50 bg-no-repeat bg-center bg-cover space-y-2">
                <h1 className="text-3xl lg:text-4xl"><b>ATM</b></h1>
                <p className="text-xl lg:max-w-xl">You can use your MasterCard® Debit Card to withdraw money from over 1.4 million ATMs around the world, 
                as long as you see the MasterCard® logo on it.</p>
                <ul className="flex text-white lg:pt-5">
                    <FaAt className="text-3xl lg:text-4xl hover:text-cyan-700 ease-in duration-500"/>
                    <Link to="https://twitter.com"><FaTwitter className="text-3xl lg:text-4xl ml-4 lg:ml-20 hover:text-cyan-700 ease-in duration-500"/></Link>
                    <Link to="https://instagram.com"><FaInstagram className="text-3xl lg:text-4xl ml-4 lg:ml-20 hover:text-cyan-700 ease-in duration-500"/></Link>
                    <Link to="https://linkedin.com"><FaLinkedin className="text-3xl lg:text-4xl ml-4 lg:ml-20 hover:text-cyan-700 ease-in duration-500"/></Link>
                </ul>
            </div>
            <div className="body px-6 py-8 space-y-4 lg:px-24">
                <p className="text-lg text-gray-700 font-medium py-2">ATM Card gives you peace of mind and reliable access to your money whenever you need and wherever you travel. 
                24 Hour Banking service, through conveniently located Automated Teller Machines (ATMs). Through our ATMs, you can perform and of the following transactions using your OWBank MasterCard® 
                Electron Card:</p>
                <ul className="space-y-2">
                    <li className="flex text-lg text-gray-700 font-medium items-center"><FaStar className="hidden text-cyan-900 mr-2 lg:flex"></FaStar> Cash Withdrawals</li>
                    <li className="flex text-lg text-gray-700 font-medium items-center"><FaStar className="hidden text-cyan-900 mr-2 lg:flex"></FaStar> Deposit Services (Online Cash Deposit, Cheque Deposit)</li>
                    <li className="flex text-lg text-gray-700 font-medium items-center"><FaStar className="hidden text-cyan-900 mr-2 lg:flex"></FaStar> Balance Inquiry & Mini Statement</li>
                    <li className="flex text-lg text-gray-700 font-medium items-center"><FaStar className="hidden text-cyan-900 mr-2 lg:flex"></FaStar> Bills Payment</li>
                    <li className="flex text-lg text-gray-700 font-medium items-center"><FaStar className="hidden text-cyan-900 mr-2 lg:flex"></FaStar> Credit Cards Services (Card Information, transaction details and Card Payment).</li>
                    <li className="flex text-lg text-gray-700 font-medium items-center"><FaStar className="hidden text-cyan-900 mr-2 lg:flex"></FaStar> Funds Transfer</li>
                    <li className="flex text-lg text-gray-700 font-medium items-center"><FaStar className="hidden text-cyan-900 mr-2 lg:flex"></FaStar> Cheque Book Request</li>
                    <li className="flex text-lg text-gray-700 font-medium items-center"><FaStar className="hidden text-cyan-900 mr-2 lg:flex"></FaStar> Account Statement Request by mail</li>                    
                </ul>
                <h1 className="text-2xl lg:text-4xl font-medium py-2">Acceptance of International & Local Cards</h1>
                <p className="flex text-lg text-gray-700 font-medium items-center">Octillion Whales Bank ATMs provide Cash Withdrawal and Balance Inquiry services to MasterCard® 
                International (Classic, Gold, Electron and Plus) cardholders, MasterCard (MasterCard, Maestro, Cirrus) and local switch cardholders.</p>
            </div>
            <FootBar/>
        </div>
     );
}
 
export default Atm;