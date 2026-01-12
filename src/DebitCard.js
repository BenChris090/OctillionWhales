import Topbar from "./Topbar";
import Navbar from "./Navbar";
import FootBar from "./FootBar";
import { Link } from "react-router-dom";
import { FaAt, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"

const DebitCard = () => {
    return ( 
        <div className="card">
            <Topbar/>
            <Navbar/>
            <div className="header text-white px-6 lg:px-24 py-10 bg-[url('./mobileBankpg.jpg')] bg-opacity-50 bg-no-repeat bg-center bg-cover space-y-2">
                <h1 className="text-3xl lg:text-4xl"><b>Debit Cards</b></h1>
                <p className="text-lg lg:text-xl lg:max-w-xl">Pay your bills and make everyday purchases, without carrying cash around. 
                Your OWBank debit cards offer you the convenience and security you need while you spend your money.</p>
                <ul className="flex text-white lg:pt-5">
                    <FaAt className="text-3xl lg:text-4xl hover:text-cyan-700 ease-in duration-500"/>
                    <Link to="https://twitter.com"><FaTwitter className="text-3xl lg:text-4xl ml-4 lg:ml-20 hover:text-cyan-700 ease-in duration-500"/></Link>
                    <Link to="https://instagram.com"><FaInstagram className="text-3xl lg:text-4xl ml-4 lg:ml-20 hover:text-cyan-700 ease-in duration-500"/></Link>
                    <Link to="https://linkedin.com"><FaLinkedin className="text-3xl lg:text-4xl ml-4 lg:ml-20 hover:text-cyan-700 ease-in duration-500"/></Link>
                </ul>
            </div>
            <div className="body px-6 lg:px-24 py-8 space-y-4">
                <h2 className="text-2xl lg:text-4xl"><b>Your Bank in your Wallet</b></h2>
                <p className="text-md text-justify lg:text-left lg:text-lg text-gray-700 font-medium py-2">You can get an instant card when you open an account at any of our branches nationwide or, 
                you can apply for one and get notified when it is ready. With our debit cards, you can: Make 24/7 ATM cash withdrawals worldwide, 
                shop at over 30 million merchants in 210 countries and make online payments on local and international websites.</p>
                <p className="text-md text-justify lg:text-left lg:text-lg text-gray-700 font-medium py-2">Make life simpler and purchasing easier with OWBank MasterCard® Debit Card debit card. Worldwide acceptance meets 24-hour banking. 
                    Interested in getting a Mastercard debit card? Contact Customer support</p>
                <p className="flex text-md text-justify lg:text-left lg:text-lg text-gray-700 font-medium"><b className="font-semibold px-1 lg:px-0 lg:font-bold flex">Note:</b> Please remember that we'll never ask you for your PIN. To ensure that we can always contact you when we need to, always keep your contact details up to date. 
                And if your card is lost or stolen, let us know straightaway by sending an email to customercares@octillionwhales.com</p>
            </div>
            <FootBar/>
        </div>
     );
}
 
export default DebitCard;