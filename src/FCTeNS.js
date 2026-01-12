import Topbar from "./Topbar";
import Navbar from "./Navbar";
import FootBar from "./FootBar";
import { Link } from "react-router-dom";
import { FaStar, FaAt, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"

const FCTeNS = () => {
    return ( 
        <div className="card">
            <Topbar/>
            <Navbar/>
            <div className="header text-white px-6 lg:px-24 py-10 bg-[url('./mobileBankpg.jpg')] bg-opacity-50 bg-no-repeat bg-center bg-cover space-y-2">
                <h1 className="text-3xl lg:text-4xl"><b>FCTeNS</b></h1>
                <p className="text-xl lg:max-w-xl">Safely and securely manage your bank statements without the hassle. 
                Free email alert system that notifies you account status.</p>
                <ul className="flex text-white lg:pt-5">
                    <FaAt className="text-3xl lg:text-4xl hover:text-cyan-700 ease-in duration-500"/>
                    <Link to="https://twitter.com"><FaTwitter className="text-3xl lg:text-4xl ml-4 lg:ml-20 hover:text-cyan-700 ease-in duration-500"/></Link>
                    <Link to="https://instagram.com"><FaInstagram className="text-3xl lg:text-4xl ml-4 lg:ml-20 hover:text-cyan-700 ease-in duration-500"/></Link>
                    <Link to="https://linkedin.com"><FaLinkedin className="text-3xl lg:text-4xl ml-4 lg:ml-20 hover:text-cyan-700 ease-in duration-500"/></Link>
                </ul>
            </div>
            <div className="body px-6 lg:px-24 py-8 space-y-4">
                <p className="text-lg text-gray-700 font-medium">The Octillion Whales Bank electronic Notification System, popularly referred to as FCTeNS 
                is a free email alert system that notifies you about money either coming in or going out of your account(s) with us.</p>
                <p className="text-lg text-gray-700 font-medium">The service will notify you by email of deposits, withdrawals and transfers in and out of your account(s) in line with the options you specify when you apply.</p>
                <h2 className="text-2xl lg:text-3xl"><b>Benefits of FCTeNS include:</b></h2>
                <ul className="space-y-2">
                    <li className="flex text-lg text-gray-700 font-medium items-center"><FaStar className="hidden text-cyan-900 mr-2 lg:flex"></FaStar> Prompt knowledge of transactions on your accounts.</li>
                    <li className="flex text-lg text-gray-700 font-medium items-center"><FaStar className="hidden text-cyan-900 mr-2 lg:flex"></FaStar> Better management of finances.</li>
                    <li className="flex text-lg text-gray-700 font-medium items-center"><FaStar className="hidden text-cyan-900 mr-2 lg:flex"></FaStar> Reduce time spent confirming clients’ payments into your accounts.</li>
                    <li className="flex text-lg text-gray-700 font-medium items-center"><FaStar className="hidden text-cyan-900 mr-2 lg:flex"></FaStar> No need to logon to the website or wait for account statements to know about new deposits.</li>
                    <li className="flex text-lg text-gray-700 font-medium items-center"><FaStar className="hidden text-cyan-900 mr-2 lg:flex"></FaStar> Effective fraud alert in cases of unauthorized transactions on accounts.</li>
                    <li className="flex text-lg text-gray-700 font-medium items-center"><FaStar className="hidden text-cyan-900 mr-2 lg:flex"></FaStar> Enhances transparency between the bank and its clients.</li>
                </ul>
                <h2 className="text-2xl lg:text-3xl"><b>Who can apply?</b></h2>
                <ul className="space-y-2">
                    <li className="flex text-lg text-gray-700 font-medium items-center"><FaStar className="hidden text-cyan-900 mr-2 lg:flex"></FaStar> Individual account holders</li>
                    <li className="flex text-lg text-gray-700 font-medium items-center"><FaStar className="hidden text-cyan-900 mr-2 lg:flex"></FaStar> Joint account holders</li>
                    <li className="flex text-lg text-gray-700 font-medium items-center"><FaStar className="hidden text-cyan-900 mr-2 lg:flex"></FaStar> Business account holders including financial institutions</li>
                </ul>
            </div>
            <FootBar/>
        </div>
     );
}
 
export default FCTeNS;