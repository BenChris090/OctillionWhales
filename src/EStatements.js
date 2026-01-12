import Topbar from "./Topbar";
import Navbar from "./Navbar";
import FootBar from "./FootBar";
import { Link } from "react-router-dom";
import { FaStar, FaAt, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"

const EStatements = () => {
    return ( 
        <div className="card">
            <Topbar/>
            <Navbar/>
            <div className="header text-white px-6 lg:px-24 py-10 bg-[url('./mobileBankpg.jpg')] bg-opacity-50 bg-no-repeat bg-center bg-cover space-y-2">
                <h1 className="text-3xl lg:text-4xl"><b>eStatements</b></h1>
                <p className="text-xl lg:max-w-xl">Safely and securely manage your bank statements without the hassle of paper. 
                eStatements are good for you—and good for the environment too.</p>
                <ul className="flex text-white lg:pt-5">
                    <FaAt className="text-3xl lg:text-4xl hover:text-cyan-700 ease-in duration-500"/>
                    <Link to="https://twitter.com"><FaTwitter className="text-3xl lg:text-4xl ml-4 lg:ml-20 hover:text-cyan-700 ease-in duration-500"/></Link>
                    <Link to="https://instagram.com"><FaInstagram className="text-3xl lg:text-4xl ml-4 lg:ml-20 hover:text-cyan-700 ease-in duration-500"/></Link>
                    <Link to="https://linkedin.com"><FaLinkedin className="text-3xl lg:text-4xl ml-4 lg:ml-20 hover:text-cyan-700 ease-in duration-500"/></Link>
                </ul>
            </div>
            <div className="body px-6 lg:px-24 py-8 space-y-4">
                <h2 className="text-xl lg:text-3xl"><b>Streamline and simplify with digital statements.</b></h2>
                <p className="text-md text-gray-700 font-medium">Now you can get your checking and savings account statements online with Octillion Whales Bank eStatements. With eStatements you can organize your account information in one safe, secure place. 
                Storing and retrieving your records has never been easier! The Octillion Whales Bank e-Statement service delivers your statements securely to your inbox.</p>
                <h2 className="text-xl lg:text-3xl"><b>Features of the e-Statement service:</b></h2>
                <ul className="space-y-2">
                    <li className="flex text-md lg:text-lg text-gray-700 font-medium items-center"><FaStar className="hidden text-cyan-900 mr-2 lg:flex"></FaStar> Secure delivery of your statements</li>
                    <li className="flex text-md lg:text-lg text-gray-700 font-medium items-center"><FaStar className="hidden text-cyan-900 mr-2 lg:flex"></FaStar> Eliminates lost/misplaced paper statements</li>
                    <li className="flex text-md lg:text-lg text-gray-700 font-medium items-center"><FaStar className="hidden text-cyan-900 mr-2 lg:flex"></FaStar> Easily view, download and print your statements</li>
                    <li className="flex text-md lg:text-lg text-gray-700 font-medium items-center"><FaStar className="hidden text-cyan-900 mr-2 lg:flex"></FaStar> Provides a fast, secure and easy method of monitoring your transactions.</li>
                    <li className="flex text-md lg:text-lg text-gray-700 font-medium items-center"><FaStar className="hidden text-cyan-900 mr-2 lg:flex"></FaStar> Email notification once e-Statement is ready</li>
                    <li className="flex text-md lg:text-lg text-gray-700 font-medium items-center"><FaStar className="hidden text-cyan-900 mr-2 lg:flex"></FaStar> Electronic statements are stored for as long as possible on a secure cloud service.</li>
                </ul>
                <h2 className="text-xl lg:text-3xl"><b>Who can benefit?</b></h2>
                <p className="text-md lg:text-lg text-gray-700 font-medium">All Octillion Whales Bank account holders with valid email addresses registered with the bank are eligible for the service.</p>
            </div>
            <FootBar/>
        </div>
     );
}
 
export default EStatements;