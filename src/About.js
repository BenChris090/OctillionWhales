import Topbar from "./Topbar";
import Navbar from "./Navbar";
import FootBar from "./FootBar";
import Spinner from "./Spinner";
import React, { useState, useEffect } from 'react';
import { NavLink,Link } from "react-router-dom";
import { FaAt, FaStar, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const About = () => {
    let ACCOUNTS = require("./ACCOUNTS.png");
    let TRAVEL = require("./travel.png");
    let TYPEWRITER = require("./typewriter.png");
    let LOANS = require("./loans.png");
    const [imagesLoaded, setImagesLoaded] = useState(false); // Track if images are loaded

    // When all images are loaded, set loading state to false
    useEffect(() => {
        const img1 = new Image();
        const img2 = new Image();
        const img3 = new Image();
        const img4 = new Image();

        img1.src = ACCOUNTS;
        img2.src = TRAVEL;
        img3.src = TYPEWRITER;
        img4.src = LOANS;

        const handleImageLoad = () => {
            if (img1.complete && img2.complete && img3.complete && img4.complete) {
                setImagesLoaded(true); // All images are loaded
            }
        };

        img1.onload = handleImageLoad;
        img2.onload = handleImageLoad;
        img3.onload = handleImageLoad;
        img4.onload = handleImageLoad;
    }, [ACCOUNTS, TRAVEL, TYPEWRITER, LOANS]);

    if (!imagesLoaded) {
        return (
            <Spinner/>
        );
    }

    return ( 
        <div className="about h-full">
            <Topbar/>
            <Navbar/>
            
            <div className="header text-white px-6 lg:px-24 py-10 bg-[url('./drk2.jpg')] bg-opacity-50 bg-no-repeat bg-center bg-cover space-y-2">
                <h1 className="text-3xl lg:text-4xl"><b>About OWBank</b></h1>
                <p className="text-xl lg:max-w-xl">Octillion Whales Bank was Established in 2000 with a license of an European broker regulated by the 
                 Conduct Authority (FCA), license No. 191/12.</p>
                <ul className="flex text-white lg:pt-5">
                    <FaAt className="text-3xl lg:text-4xl hover:text-cyan-700 ease-in duration-500"/>
                    <Link to="https://twitter.com"><FaTwitter className="text-3xl lg:text-4xl ml-4 lg:ml-20 hover:text-cyan-700 ease-in duration-500"/></Link>
                    <Link to="https://instagram.com"><FaInstagram className="text-3xl lg:text-4xl ml-4 lg:ml-20 hover:text-cyan-700 ease-in duration-500"/></Link>
                    <Link to="https://linkedin.com"><FaLinkedin className="text-3xl lg:text-4xl ml-4 lg:ml-20 hover:text-cyan-700 ease-in duration-500"/></Link>
                </ul>
            </div>
            <div className="body text-left space-y-2 px-6 lg:px-24 py-8">
                <h1 className="text-2xl lg:text-3xl p-2"><b>Get loan with minimal documents</b></h1>
                <p className="text-lg text-justify lg:text-xl lg:text-left text-gray-700 font-medium py-2 px-2">Octillion Whales Bank leads the pack when it comes to Banking. Whether you’re a skilled or completely new to online banking, 
                our platforms give you the tools needed to take advantage of the foreign exchange market’s volatility. With Heinrich Trust Bank it’s simple to get started trading Forex, and it’s easy to get the education needed to hone your skills. 
                You’ll be able to benefit from one on one support from our specialist team and develop your expertise with our professional Forex trading resources and insights. For beginner and advanced traders alike we offer high leverage, guaranteed stop losses on every Forex trade, 
                and our fixed spreads remain constant to give you greater strategic power and control. Get Started with us Today, and experience a swift journey filled with excitement.</p>
                <ul className="space-y-2">
                    <li className="flex text-lg text-gray-700 font-medium items-centFa"><FaStar className="text-cyan-900 mr-2"></FaStar> Internet Banking</li>
                    <li className="flex text-lg text-gray-700 font-medium items-center"><FaStar className="text-cyan-900 mr-2"></FaStar> Loans</li>
                    <li className="flex text-lg text-gray-700 font-medium items-center"><FaStar className="text-cyan-900 mr-2"></FaStar> Funds Transfer</li>
                    <li className="flex text-lg text-gray-700 font-medium items-center"><FaStar className="text-cyan-900 mr-2"></FaStar> Prepaid Cards</li>
                    <li className="flex text-lg text-gray-700 font-medium items-center"><FaStar className="text-cyan-900 mr-2"></FaStar> MCash</li>
                </ul>
            </div>
            <div className="body text-center space-y-2 px-6 lg:px-48 py-8">
                <h1 className="text-2xl lg:text-3xl p-2"><b>World Leading Finance Institution</b></h1>
                <p className="text-lg lg:text-xl text-gray-700 font-medium py-2 px-2">The Financial Conduct Authority (FCA) license No. 191/13 makes the company follow strict quality standards and transparency of its activities, 
                including the provision of client services.</p>
            </div>
            <div className="body text-left px-6 lg:px-24 py-8 space-y-4 lg:space-x-4 lg:space-y-0 lg:flex">
                <div className="w-full space-y-2 shadow-xl rounded-xl border-2 border-black lg:w-1/4 py-10 px-4 hover:scale-105">
                    <img src={ACCOUNTS} alt="debit_card" className="w-1/4"/>
                    <h2 className="text-xl font-semibold">Accounts</h2>
                    <p>We offer a wide range of accounts to suit lifestyles & needs. 
                        Free and paid-for add-ons are available to give total control. 
                        Download, Fill & Submit at our Branch.</p>
                </div>
                <div className="w-full space-y-2 shadow-xl rounded-xl border-2 border-black lg:w-1/4 py-10 px-4 hover:scale-105">
                    <img src={TRAVEL} alt="credit_card" className="w-1/4"/>
                    <h2 className="text-xl font-semibold">Round The Clock Banking</h2>
                    <p>Access your personal account information with ease, transfer funds securely whenever you want, 
                        wherever you want..</p>
                </div>
                <div className="w-full space-y-2 shadow-xl rounded-xl border-2 border-black lg:w-1/4 py-10 px-4 hover:scale-105">
                    <img src={TYPEWRITER} alt="prepaid_card" className="w-1/4"/>
                    <h2 className="text-xl font-semibold">Reliable customer service</h2>
                    <p>We are synonymous with innovation, building excellence, 
                        superior financial performance and creating role models for society.</p>
                </div>
                <div className="w-full space-y-2 shadow-xl rounded-xl border-2 border-black lg:w-1/4 py-10 px-4 hover:scale-105">
                    <img src={LOANS} alt="mobile_wallet" className="w-1/4"/>
                    <h2 className="text-xl font-semibold">Loans</h2>
                    <p>We offer different kinds of loans Students Loan, Business banking and more.</p>
                </div>
            </div>
            <FootBar/>
        </div>
     );
}
 
export default About;