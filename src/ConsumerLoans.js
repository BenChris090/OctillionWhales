import Topbar from "./Topbar";
import Navbar from "./Navbar";
import Spinner from "./Spinner";
import FootBar from "./FootBar";
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { FaAt, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"

const Consumer_Loans = () => {
    let MONEYBAG = require("./money-bag.png");
    let LOANS = require("./loans.png");
    let RATE = require("./rates.png");
    let EASYAPPLY = require("./easy-apply.png");
    const [imagesLoaded, setImagesLoaded] = useState(false); // Track if images are loaded

    // When all images are loaded, set loading state to false
    useEffect(() => {
        const img1 = new Image();
        const img2 = new Image();
        const img3 = new Image();
        const img4 = new Image();

        img1.src = MONEYBAG;
        img2.src = LOANS;
        img3.src = RATE;
        img4.src = EASYAPPLY;

        const handleImageLoad = () => {
            if (img1.complete && img2.complete && img3.complete && img4.complete) {
                setImagesLoaded(true); // All images are loaded
            }
        };

        img1.onload = handleImageLoad;
        img2.onload = handleImageLoad;
        img3.onload = handleImageLoad;
        img4.onload = handleImageLoad;
    }, [MONEYBAG, LOANS, RATE, EASYAPPLY]);

    if (!imagesLoaded) {
        return (
            <Spinner/>
        );
    }


    return ( 
        <div className="consumer-loans ">
            <Topbar/>
            <Navbar/>
            <div className="header text-white px-6 lg:px-24 py-10 bg-[url('./mobileBankpg.jpg')] bg-opacity-50 bg-no-repeat bg-center bg-cover space-y-2">
                <h1 className="text-3xl lg:text-4xl"><b>Reduced Consumer Loans</b></h1>
                <p className="text-xl lg:max-w-xl">Rates as low as 2.97% APR* (Variable) / 3.35% APR* (FIXED)!* 
                Live customer support available M-F 9am to 5pm PST to discuss your needs.</p>
                <ul className="flex text-white lg:pt-5">
                    <FaAt className="text-3xl lg:text-4xl hover:text-cyan-700 ease-in duration-500"/>
                    <Link to="https://twitter.com"><FaTwitter className="text-3xl lg:text-4xl ml-4 lg:ml-20 hover:text-cyan-700 ease-in duration-500"/></Link>
                    <Link to="https://instagram.com"><FaInstagram className="text-3xl lg:text-4xl ml-4 lg:ml-20 hover:text-cyan-700 ease-in duration-500"/></Link>
                    <Link to="https://linkedin.com"><FaLinkedin className="text-3xl lg:text-4xl ml-4 lg:ml-20 hover:text-cyan-700 ease-in duration-500"/></Link>
                </ul>
            </div>
            <div className="body text-center px-6 lg:px-48 py-8">
                <h1 className="text-xl lg:text-3xl font-bold p-2">Get loan with minimal documents</h1>
                <p className="text-lg text-gray-700 font-medium py-2 lg:text-xl lg:px-16">If you need money for anything you find important - travelling, shopping, accomplishing your ideas.</p>
            </div>
            <div className="body text-left px-6 py-8 space-y-4 lg:px-24 lg:space-x-4 lg:space-y-0 lg:flex">
                <div className="w-full space-y-2 shadow-xl rounded-xl border-2 border-black py-10 px-4 lg:w-1/4 hover:scale-105">
                    <img src={MONEYBAG} alt="debit_card" className="w-1/4"/>
                    <h2 className="text-xl font-semibold">No Hidden Fees</h2>
                    <p>No application or origination fees. No pre-payment penalties.</p>
                </div>
                <div className="w-full space-y-2 shadow-xl rounded-xl border-2 border-black py-10 px-4 lg:w-1/4 hover:scale-105">
                    <img src={LOANS} alt="credit_card" className="w-1/4"/>
                    <h2 className="text-xl font-semibold">Federal + Private Loans</h2>
                    <p>Refinance and consolidate both federal and private student loans.</p>
                </div>
                <div className="w-full space-y-2 shadow-xl rounded-xl border-2 border-black py-10 px-4 lg:w-1/4 hover:scale-105">
                    <img src={RATE} alt="prepaid_card" className="w-1/4"/>
                    <h2 className="text-xl font-semibold">Bank-Beating Rates</h2>
                    <p>Choose our best rates starting at 2.97% APR* (Variable) / 3.35% APR* (Fixed).</p>
                </div>
                <div className="w-full space-y-2 shadow-xl rounded-xl border-2 border-black py-10 px-4 lg:w-1/4 hover:scale-105">
                    <img src={EASYAPPLY} alt="mobile_wallet" className="w-1/4"/>
                    <h2 className="text-xl font-semibold">Easy Application</h2>
                    <p>Simple online application and document upload available 24/7.</p>
                </div>
            </div>
            <FootBar/>
        </div>
     );
}
 
export default Consumer_Loans;