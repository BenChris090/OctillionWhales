import Topbar from "./Topbar";
import Navbar from "./Navbar";
import FootBar from "./FootBar";
import { Link } from "react-router-dom";
import { FaAt, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"

const Card = () => {
    let DEBITCRD = require("./debit_card.png");
    let CREDITCRD = require("./credit_card.png");
    let PREPAIDCRD = require("./prepaid_cards.png");
    let WALLET = require("./wallet.png");

    return ( 
        <div className="card">
            <Topbar/>
            <Navbar/>
            <div className="header text-white px-6 py-8 lg:px-24 lg:py-10 bg-[url('./mobileBankpg.jpg')] bg-opacity-50 bg-no-repeat bg-center bg-cover space-y-2">
                <h1 className="text-3xl lg:text-4xl"><b>Cards</b></h1>
                <p className="text-xl lg:max-w-xl">Get easy access to your money anytime, anywhere in the world with your MCTBank cards. 
                Keep tabs on your money with your Debit Cards, Credit Cards, Prepaid Cards</p>
                <ul className="flex text-white lg:pt-5">
                    <FaAt className="text-4xl hover:text-cyan-700 ease-in duration-500"/>
                    <Link to="https://twitter.com"><FaTwitter className="text-4xl ml-4 lg:ml-20 hover:text-cyan-700 ease-in duration-500"/></Link>
                    <Link to="https://instagram.com"><FaInstagram className="text-4xl ml-4 lg:ml-20 hover:text-cyan-700 ease-in duration-500"/></Link>
                    <Link to="https://linkedin.com"><FaLinkedin className="text-4xl ml-4 lg:ml-20 hover:text-cyan-700 ease-in duration-500"/></Link>
                </ul>
            </div>
            <div className="body text-center px-6 lg:px-48 py-8">
                <h1 className="text-2xl lg:text-3xl p-2"><b>Debit Cards, Credit Cards, Prepaid Cards</b></h1>
                <p className="text-xl text-gray-700 font-medium px-2 py-2 lg:px-16">Octillion Whales Bank makes digital payments and transfers easy with various credit, 
                debit and ATM card options to suit your needs. You'll appreciate the anytime access and other convenient features of these cards.</p>
            </div>
            <div className="body text-left px-6 lg:px-24 py-8 space-y-4 lg:space-x-4 lg:space-y-0 lg:flex">
                <div className="w-full space-y-2 shadow-xl rounded-xl border-2 lg:w-1/4 border-black py-10 px-4 hover:scale-105">
                    <img src={DEBITCRD} alt="debit_card" className="w-1/4"/>
                    <h2 className="text-xl font-semibold">Debit Cards</h2>
                    <p>Take control of your accounts and get close to your money with your chosen MCTBank debit card.</p>
                </div>
                <div className="w-full space-y-2 shadow-xl rounded-xl border-2 lg:w-1/4 border-black py-10 px-4 hover:scale-105">
                    <img src={CREDITCRD} alt="credit_card" className="w-1/4"/>
                    <h2 className="text-xl font-semibold">Credit Cards</h2>
                    <p>Discover the best credit card that's right for you and enjoy an array of attractive rewards</p>
                </div>
                <div className="w-full space-y-2 shadow-xl rounded-xl border-2 lg:w-1/4 border-black py-10 px-4 hover:scale-105">
                    <img src={PREPAIDCRD} alt="prepaid_card" className="w-1/4"/>
                    <h2 className="text-xl font-semibold">Prepaid Cards</h2>
                    <p>Get a Prepaid card for better financial control. Add money, pay bills, manage your spending the smart way.</p>
                </div>
                <div className="w-full space-y-2 shadow-xl rounded-xl border-2 lg:w-1/4 border-black py-10 px-4 hover:scale-105">
                    <img src={WALLET} alt="mobile_wallet" className="w-1/4"/>
                    <h2 className="text-xl font-semibold">Mobile Wallet</h2>
                    <p>Introducing Mobile Wallet, a safe and easy way to make payments with your MCTBank Debit and Credit Cards.</p>
                </div>
            </div>
            <FootBar/>
        </div>
     );
}
 
export default Card;