import Topbar from "./Topbar";
import Navbar from "./Navbar";
import FootBar from "./FootBar";
import { NavLink,Link } from "react-router-dom";
import { FaAt, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"

const CorporateBanking = () => {
    let LADY = require("./Lady.jpg");

    return ( 
        <div className="card">
            <Topbar/>
            <Navbar/>
            <div className="header text-black px-6 lg:px-24 py-10 bg-[url('./building9.jpg')] bg-opacity-50 bg-no-repeat bg-center bg-cover space-y-2">
                <h1 className="text-3xl lg:text-4xl"><b>Corporate Banking</b></h1>
                <p className="text-xl font-medium lg:max-w-xl">With banking solutions designed to increase productivity & growth, 
                together we will make your business vision reality.</p>
                <ul className="flex text-black lg:pt-5">
                    <FaAt className="text-4xl hover:text-cyan-700 ease-in duration-500"/>
                    <Link to="https://twitter.com"><FaTwitter className="text-4xl ml-4 lg:ml-20 hover:text-cyan-700 ease-in duration-500"/></Link>
                    <Link to="https://instagram.com"><FaInstagram className="text-4xl ml-4 lg:ml-20 hover:text-cyan-700 ease-in duration-500"/></Link>
                    <Link to="https://linkedin.com"><FaLinkedin className="text-4xl ml-4 lg:ml-20 hover:text-cyan-700 ease-in duration-500"/></Link>
                </ul>
            </div>
            <div className="body text-center px-6 lg:px-48 py-8">
                <h1 className="text-2xl lg:text-3xl p-2"><b>Consider your bank account a business asset</b></h1>
                <p className="text-xl text-gray-700 font-medium py-2 lg:px-16">When you consider the advantages that come with a OWBank Corporate Account and the many benefits to your business, 
                coupled with the support and guidance you receive from your ever attentive relationship manager, you would be right to consider it a valuable business asset.</p>
            </div>
            <div className="body bg-cyan-700 bg-opacity-20 space-y-2 lg:space-x-2 lg:space-y-0 px-6 lg:px-24 py-8 lg:flex">
                <div className="w-full lg:w-1/2 space-y-2">
                    <h1 className=" text-3xl py-2"><b>Bank Accounts</b></h1>
                    <p className="text-lg text-gray-700 font-medium py-2">When you consider the advantages that come with a OWBank Corporate account, 
                    coupled with the support and guidance you receive from your Relationship Manager, you would be right to consider it a valuable business asset.</p>
                    <h1 className="py-4"><NavLink to="/corporate-banking" className="text-white font-medium p-4 rounded-3xl bg-cyan-900">Open A Corporate Account</NavLink></h1>
                </div>
                <div className="w-full lg:w-1/2">
                    <img src={LADY} alt="Lady" className=""/>
                </div>
            </div>
            <div className="body text-left px-6 lg:px-24 py-8 space-y-4 lg:space-x-4 lg:space-y-0 lg:flex">
                <div className="w-full space-y-2 shadow-xl border-2 border-black lg:w-1/4 py-10 px-4 hover:scale-105">
                    <h2 className="text-xl font-semibold">Electronic Banking</h2>
                    <p>Business is increasingly mobile as opportunities may arise far from home base. 
                        Our electronic banking platforms can keep you connected to your funds wherever you may be on the planet</p>
                </div>
                <div className="w-full space-y-2 shadow-xl border-2 border-black lg:w-1/4 py-10 px-4 hover:scale-105">
                    <h2 className="text-xl font-semibold">Card Solutions</h2>
                    <p>Paying with plastic is steadily becoming the rule rather then the exception. 
                        But our corporate cards aren’t only about replacing cash, as there is so much more you can do with them.</p>
                </div>
                <div className="w-full space-y-2 shadow-xl border-2 border-black lg:w-1/4 py-10 px-4 hover:scale-105">
                    <h2 className="text-xl font-semibold">Business Services</h2>
                    <p>International trade can be a complicated endeavor with different laws and practices to contend with in every market one conducts business. 
                        So you need a bank that understands international trade and can offer the best help.</p>
                </div>
                <div className="w-full space-y-2 shadow-xl border-2 border-black lg:w-1/4 py-10 px-4 hover:scale-105">
                    <h2 className="text-xl font-semibold">Investments & Loans</h2>
                    <p>Ideas capable of reshaping our world often require vast sums of money to bring to life. Our loans have never met an idea they couldn’t birth. 
                        So bring on the big ideas and let’s change the world together.</p>
                </div>
            </div>
            <FootBar/>
        </div>
     );
}
 
export default CorporateBanking;