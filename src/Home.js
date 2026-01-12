import Topbar from "./Topbar";
import Navbar from "./Navbar";
import FootBar from "./FootBar";
import React, { useState, useEffect } from 'react';
import { NavLink,Link } from "react-router-dom";
import { FaAt, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"
import { BsApple,BsAndroid2 } from "react-icons/bs"
import Spinner from "./Spinner";

const Home = () => {
    let HOME_PIC1 = require('./octillionWhales1.jpg');
    let HOME_PIC2 = require('./octillionWhales2.jpg');
    let HOME_PIC3 = require('./octillionWhales3.jpg')
    const [imagesLoaded, setImagesLoaded] = useState(false); // Track if images are loaded

    // When all images are loaded, set loading state to false
    useEffect(() => {
        const img1 = new Image();
        const img2 = new Image();
        const img3 = new Image();

        img1.src = HOME_PIC1;
        img2.src = HOME_PIC2;
        img3.src = HOME_PIC3;

        const handleImageLoad = () => {
            if (img1.complete && img2.complete && img3.complete) {
                setImagesLoaded(true); // All images are loaded
            }
        };

        img1.onload = handleImageLoad;
        img2.onload = handleImageLoad;
        img3.onload = handleImageLoad;
    }, [HOME_PIC1, HOME_PIC2, HOME_PIC3]);

    if (!imagesLoaded) {
        return (
            <Spinner/>
        );
    }

    return ( 
        <div className="home h-full bg-white">
            <Topbar/>
            <Navbar/>
            <div className="p-6 w-full bg-[url('./octillionWhales4.jpg')] bg-no-repeat bg-cover items-center space-y-4 lg:p-24 lg:space-y-4 lg:justify-around lg:h-[25rem] lg:max-h-[26rem]">
                <h1 class="top-3 text-white font-bold text-3xl lg:text-5xl">Everyone Can...<br/><b className="text-lg lg:text-2xl">Have an Octillion Whales Account With Zero Dollar</b></h1>
                <h1><NavLink className="p-2 border-2 text-white rounded-lg bg-cyan-700"><b>Learn More......</b></NavLink></h1>

                <ul className="flex lg:pt-10">
                    <FaAt className="text-3xl lg:text-4xl text-cyan-500 hover:text-cyan-700 ease-in duration-500"/>
                    <Link to="https://twitter.com"><FaTwitter className="text-3xl lg:text-4xl text-cyan-500 ml-4 lg:ml-20 hover:text-cyan-700 ease-in duration-500"/></Link>
                    <Link to="https://instagram.com"><FaInstagram className="text-3xl lg:text-4xl text-cyan-500 ml-4 lg:ml-20 hover:text-cyan-700 ease-in duration-500"/></Link>
                    <Link to="https://linkedin.com"><FaLinkedin className="text-3xl lg:text-4xl text-cyan-500 ml-4 lg:ml-20 hover:text-cyan-700 ease-in duration-500"/></Link>
                </ul>
            </div>
            <div className="apps bg-cyan-900 px-6 py-4 items-center text-white lg:flex lg:px-24 lg:space-x-48">
                <h1 className="text-lg lg:text-2xl">Download Our Mobile app & Get Fast Banking Service</h1>
                <ul className="flex text-cyan-900 space-x-4">
                    <Link to="#" className="flex p-2 items-center border-2 bg-white rounded-md hover:text-cyan-700 ease-in duration-500"><BsApple className="text-lg mr-2 my-auto hover:text-cyan-700 ease-in duration-500 lg:text-xl lg:mr-4"/><b>App Store</b></Link>
                    <Link to="#" className="flex p-2 items-center border-2 bg-white rounded-md hover:text-cyan-700 ease-in duration-500"><BsAndroid2 className="text-lg mr-2 my-auto hover:text-cyan-700 ease-in duration-500 lg:text-xl lg:mr-4"/><b>Play Store</b></Link>
                </ul>
            </div>
            <div className="learn p-2 lg:mt-10">
                <h1 className="text-lg text-center lg:text-4xl"><b>Learn, grow and focus on what matters</b></h1>
                <p className="text-lg text-center text-cyan-700 md:font-semibold lg:text-2xl">World Leading Finance Institution</p>
                <section className="px-4 py-10 justify-center items-center space-y-4 lg:flex lg:space-y-0 lg:space-x-4 lg:px-24">
                    <div className="p-4 w-full space-y-2 lg:px-4 lg:h-[25rem] lg:w-1/3 lg:max-w-52">
                        <img src={ HOME_PIC1 } className=" h-48 w-full mx-auto lg:h-52" alt="ACC Pic" />
                        <h2 className="text-lg lg:text-xl"><b>Accounts</b></h2>
                        <p className="text-justify">We offer a wide range of accounts to suit lifestyles & needs. Free and paid-for add-ons are available to give total control. Download, Fill & Submit at our Branch. Minimum account size of $5,000</p>
                    </div>
                    <div className="p-4 w-full space-y-2 lg:px-4 lg:h-[25rem] lg:w-1/3 lg:max-w-52">
                        <img src={ HOME_PIC2 } className=" h-48 w-full mx-auto lg:h-52" alt="RCS Pic" />
                        <h2 className="text-lg lg:text-xl"><b>Reliable Customer Service</b></h2>
                        <p className="text-justify">We are synonymous with innovation, building excellence, superior financial performance and creating role models for society.</p>
                    </div>
                    <div className="p-4 w-full space-y-2 lg:px-4 lg:h-[25rem] lg:w-1/3 lg:max-w-52">
                        <img src={ HOME_PIC3 } className=" h-48 w-full mx-auto lg:h-52" alt="RTC Pic" />
                        <h2 className="text-lg lg:text-xl"><b>Round the Clock Banking</b></h2>
                        <p className="text-justify">Access your personal account information with ease, transfer funds securely whenever you want, wherever you want.</p>
                    </div>
                </section>
            </div>
            <FootBar/>
        </div>
     );
}
 
export default Home;