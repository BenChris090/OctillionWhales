import { Link } from "react-router-dom";
import { useState } from "react";

const SignUp = () => {    
    let ICE_LOGO =  require('./ICE_LOGO.png');
    const [passwordInput, setPasswordInput] = useState("");

    const handlePasswordChange =(evnt)=>{
        setPasswordInput(evnt.target.value);
    }

    return ( 
        <div className="signup bg-[url('./building7.jpg')] bg-no-repeat bg-cover bg-opacity-50 space-y-2 px-24 py-10">
            <div className="px-8 py-2">
            <Link to="/" className="flex items-center px-[22rem]"><img src={ ICE_LOGO } className="h-12 mr-3 sm:h-16 lg:h-16" alt="Logo" /><span className="self-center text-3xl font-semibold whitespace-nowrap text-cyan-500 lg:text-4xl">ICE_BERG</span></Link>
            </div>            
            <div className="body text-center space-y-1 px-48 py-4">
                <h1 className=" text-xl font-bold p-2"><b>Welcome to the Octillion Whales Bank Account Opening Portal</b></h1>
                <p className="text-md text-cyan-900 font-bold p-2">Opening an Octillion Whales Bank account is easier than ever before.</p>
            </div>
            <div className="form mx-60">
                <form action="" className="space-y-2 bg-cyan-900 items-center shadow-2xl rounded-2xl">
                    <p className="text-md text-white font-medium text-center p-4">Kindly provide the required details below to receive your Internet Banking login details via Email.</p>
                    <div className="flex space-x-8 px-10">
                        <input className="w-full text-black p-4 border-2 border-teal-600 bg-white rounded-lg ease-in duration-500 mt-4" onChange={handlePasswordChange} value={passwordInput} type="text"
                                    placeholder="Enter First Name"/>
                        <input className="w-full text-black p-4 border-2 border-teal-600 bg-white rounded-lg ease-in duration-500 mt-4" onChange={handlePasswordChange} value={passwordInput} type="text"
                            placeholder="Enter Last Name"/>
                    </div>
                    <div className="flex space-x-8 px-10">
                        <input className="w-full text-black p-4 border-2 border-teal-600 bg-white rounded-lg ease-in duration-500 mt-4" onChange={handlePasswordChange} value={passwordInput} type="text"
                                    placeholder="Occupation"/>
                        <input className="w-full text-black p-4 border-2 border-teal-600 bg-white rounded-lg ease-in duration-500 mt-4" onChange={handlePasswordChange} value={passwordInput} type="email"
                            placeholder="Enter A Valid Email"/>
                    </div>
                    <div className="flex space-x-8 px-10">
                        <input className="w-full text-black p-4 border-2 border-teal-600 bg-white rounded-lg ease-in duration-500 mt-4" onChange={handlePasswordChange} value={passwordInput} type="text"
                                    placeholder="Address"/>
                        <input className="w-full text-black p-4 border-2 border-teal-600 bg-white rounded-lg ease-in duration-500 mt-4" onChange={handlePasswordChange} value={passwordInput} type="number"
                            placeholder="City"/>
                    </div>
                    <div className="flex space-x-8 px-10">
                        <input className="w-full text-black p-4 border-2 border-teal-600 bg-white rounded-lg ease-in duration-500 mt-4" onChange={handlePasswordChange} value={passwordInput} type="text"
                                    placeholder="State"/>
                        <input className="w-full text-black p-4 border-2 border-teal-600 bg-white rounded-lg ease-in duration-500 mt-4" onChange={handlePasswordChange} value={passwordInput} type="number"
                            placeholder="Zip Code"/>
                    </div>
                    <div className="flex space-x-8 px-10">
                        <input className="w-full text-black p-4 border-2 border-teal-600 bg-white rounded-lg ease-in duration-500 mt-4" onChange={handlePasswordChange} value={passwordInput} type="text"
                                    placeholder="Phone"/>
                        <input className="w-full text-black p-4 border-2 border-teal-600 bg-white rounded-lg ease-in duration-500 mt-4" onChange={handlePasswordChange} value={passwordInput} type="date"
                            placeholder="Date Of Birth (dd/mm/yyyy)"/>
                    </div>
                    <div className="flex space-x-8 px-10">
                        <input className="w-full text-black p-4 border-2 border-teal-600 bg-white rounded-lg ease-in duration-500 mt-4" onChange={handlePasswordChange} value={passwordInput} type="text"
                                    placeholder="Gender M/F"/>
                        <input className="w-full text-black p-4 border-2 border-teal-600 bg-white rounded-lg ease-in duration-500 mt-4" onChange={handlePasswordChange} value={passwordInput} type="text"
                            placeholder="Marital Status"/>
                    </div>
                    <div className="flex space-x-8 px-10">
                        <input className="w-full text-black p-4 border-2 border-teal-600 bg-white rounded-lg ease-in duration-500 mt-4" onChange={handlePasswordChange} value={passwordInput} type="text"
                                    placeholder="Password"/>
                        <input className="w-full text-black p-4 border-2 border-teal-600 bg-white rounded-lg ease-in duration-500 mt-4" onChange={handlePasswordChange} value={passwordInput} type="text"
                            placeholder="Confirm Password"/>
                    </div>
                    <div className="flex space-x-8 px-10">
                        <input className="w-full text-black p-4 border-2 border-teal-600 bg-white rounded-lg ease-in duration-500 mt-4" onChange={handlePasswordChange} value={passwordInput} type="text"
                                    placeholder="Account Type"/>
                        <input className="w-full text-black p-4 border-2 border-teal-600 bg-white rounded-lg ease-in duration-500 mt-4" onChange={handlePasswordChange} value={passwordInput} type="file"
                            placeholder="Passport"/>
                    </div>
                    <p className="text-xl text-white font-medium text-center p-4">Next Of Kin</p>
                    <div className="flex space-x-8 px-10">
                        <input className="w-full text-black p-4 border-2 border-teal-600 bg-white rounded-lg ease-in duration-500 mt-4" onChange={handlePasswordChange} value={passwordInput} type="text"
                                    placeholder="Enter First Name"/>
                        <input className="w-full text-black p-4 border-2 border-teal-600 bg-white rounded-lg ease-in duration-500 mt-4" onChange={handlePasswordChange} value={passwordInput} type="text"
                            placeholder="Enter Last Name"/>
                    </div>
                    <div className="flex space-x-8 px-10">
                        <input className="w-full text-black p-4 border-2 border-teal-600 bg-white rounded-lg ease-in duration-500 mt-4" onChange={handlePasswordChange} value={passwordInput} type="text"
                                    placeholder="Phone"/>
                        <input className="w-full text-black p-4 border-2 border-teal-600 bg-white rounded-lg ease-in duration-500 mt-4" onChange={handlePasswordChange} value={passwordInput} type="email"
                            placeholder="Email"/>
                    </div>
                    <div className="flex space-x-8 px-10">
                        <input className="w-full text-black p-4 border-2 border-teal-600 bg-white rounded-lg ease-in duration-500 mt-4" onChange={handlePasswordChange} value={passwordInput} type="text"
                                    placeholder="Address"/>
                        <input className="w-full text-black p-4 border-2 border-teal-600 bg-white rounded-lg ease-in duration-500 mt-4" onChange={handlePasswordChange} value={passwordInput} type="text"
                            placeholder="State"/>                        
                    </div>
                    <div className="button p-8 items-center text-center">
                        <button type="submit" className="font-bold bg-teal-600 rounded-2xl px-8 py-4">SUBMIT</button>
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default SignUp;