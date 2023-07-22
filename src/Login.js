import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {    
    const [Text, setText] = useState("Show Password")
    const [PasswordType, setPasswordType] = useState("password");
    const [TextInput, setTextInput] = useState("");
    const [PasswordInput, setPasswordInput] = useState("");

    const handleTextChange =(evnt)=>{
        setTextInput(evnt.target.value);
    }
    
    const handlePasswordChange =(evnt)=>{
        setPasswordInput(evnt.target.value);
    }

    const togglePassword =()=>{
        if(PasswordType==="password")
        {
         setPasswordType("text")
         setText("Hide Password")
         return;
        }
        setPasswordType("password")
        setText("Show Password")
      }


    return ( 
        <div className="login items-center text-center p-10 lg:p-24 h-screen">
            <form action="" className="m-auto p-8 rounded-xl space-y-12 lg:space-y-8 bg-cyan-900 shadow-xl shadow-gray-700 max-w-md lg:max-w-lg">
                <h1 className="text-4xl text-white"><b>LOGIN:</b></h1>
                <input className="w-full text-black p-4 border-2 border-teal-600 bg-white rounded-lg ease-in duration-500 mt-4" onChange={handleTextChange} value={TextInput} type="text"
                            placeholder="Enter User ID"/> <br/>
                <input className="w-full text-black p-4 border-2 border-teal-600 bg-white rounded-lg ease-in duration-500 mt-4" onChange={handlePasswordChange} value={PasswordInput} type={PasswordType}
                    placeholder="Enter Passkey"/> <br/>
                <p className="flex text-lg font-bold justify-center items-center"> { PasswordType==="password"? <FaEye className="mr-2 text-2xl" onClick={togglePassword}/> :<FaEyeSlash className="mr-2 text-2xl" onClick={togglePassword}/> } {Text}</p>
                <button
                    className="text-gray-50 w-full p-4 text-lg border-2 border-teal-600 bg-teal-600 rounded-lg ease-in duration-500 mt-4"><b>LOGIN</b></button>
            </form>
        </div>
     );
}
 
export default Login;