import Topbar from "./Topbar";
import Navbar from "./Navbar";
import FootBar from "./FootBar";
import { NavLink,Link } from "react-router-dom";
import { FaAt, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"
import {ReactComponent as AppStore} from "./app_store_badge.svg"
import {ReactComponent as GoogleStore} from "./google_store_badge.svg"

const Mobile = () => {
    return ( 
        <div className="mobile">            
            <Topbar/>
            <Navbar/>
            <div className="header text-white px-6 py-8 bg-[url('./mobileBankpg.jpg')] bg-opacity-50 bg-no-repeat bg-center bg-cover lg:px-24 lg:py-16">
                <h1 className="text-3xl lg:text-4xl"><b>MOBILE BANKING</b></h1>
                <p className="text-xl lg:text-2xl lg:max-w-xl">Convenient and easy access to carry out transactions. 
                    From transferring funds to friends and family to paying bills or topping up on the go.</p>
                <ul className="flex text-white lg:pt-10">
                    <FaAt className="text-3xl lg:text-4xl hover:text-cyan-700 ease-in duration-500"/>
                    <Link to="https://twitter.com"><FaTwitter className="text-3xl lg:text-4xl ml-4 lg:ml-20 hover:text-cyan-700 ease-in duration-500"/></Link>
                    <Link to="https://instagram.com"><FaInstagram className="text-3xl lg:text-4xl ml-4 lg:ml-20 hover:text-cyan-700 ease-in duration-500"/></Link>
                    <Link to="https://linkedin.com"><FaLinkedin className="text-3xl lg:text-4xl ml-4 lg:ml-20 hover:text-cyan-700 ease-in duration-500"/></Link>
                </ul>
            </div>
            <div className="body text-center px-6 lg:px-48 py-8">
                <h2 className="text-2xl p-1 lg:text-3xl lg:p-2"><b>Discover the freedom of Mobile Banking</b></h2>
                <p className="text-xl lg:text-2xl text-gray-700 p-2">We never stop looking for new ways to make banking simpler, smarter and better. 
                    Octillion Whales Mobile Banking Service gives you unrestricted and secure access to your account, anytime, 
                    anywhere tablet, smartphones or any mobile device. Welcome to banking on the go!</p>
                <p className="text-xl lg:text-2xl text-gray-700 p-2">Download the OWBank Mobile app today and access you money anytime you need it. 
                    Our Mobile Banking App lets you carry your bank with you wherever you go. 
                    You can perform transactions and manage your bank account(s) from your mobile device.</p>
                <div className="badges m-2 flex space-x-4 justify-center mx-auto">
                    <div className="border-black border-2 rounded-lg flex p-4 space-x-4 justify-between w-96">
                        <NavLink className="w-1/2"><AppStore/></NavLink>
                        <NavLink className="w-1/2"><GoogleStore/></NavLink>
                    </div>
                </div>
            </div>
            <FootBar/>
        </div>
     );
}
 
export default Mobile;