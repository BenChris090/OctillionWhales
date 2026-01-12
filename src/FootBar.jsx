import { FaHeart } from "react-icons/fa";

const FootBar = () => {
    return ( 
        <div className="footbar w-screen text-white bg-cyan-900 text-center justify-center px-auto py-2 lg:px-48 bottom-0 static">
            <div className="text-center w-1/2 mx-auto">
                <h1 className="flex px-auto font-bold text-center mx-auto">with love from Ice_Berg <FaHeart className="text-red-800 m-2"/></h1>
            </div>
        </div>
     );
}
 
export default FootBar;