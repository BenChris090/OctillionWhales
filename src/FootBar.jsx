import { FaHeart } from "react-icons/fa";

const FootBar = () => {
    return ( 
        <div className="footbar text-white bg-cyan-900 text-center px-8 py-2 lg:px-48 bottom-0 static">
            <div className="text-center w-full mx-auto lg:w-1/2">
                <h1 className="flex p-2 font-bold items-center lg:mx-24">with love from Ice_Berg <FaHeart className="text-red-800 ml-2"/></h1>
            </div>
        </div>
     );
}
 
export default FootBar;