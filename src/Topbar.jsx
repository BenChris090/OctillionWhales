import { BsGlobe2, } from "react-icons/bs"
import { Link, NavLink } from "react-router-dom";

const Topbar = () => {
    return ( 
        <div className="px-auto justify-center text-white bg-cyan-900 items-center text-center p-2 lg:flex lg:py-auto lg:space-x-96">
                <div className="flex space-x-2 p-2 md:text-xs lg:font-bold lg:text-lg lg:space-x-4">
                    <NavLink to="/404"><p>Help Center</p></NavLink>
                    <b> | </b>
                    <NavLink to="/404"><p>Careers</p></NavLink>
                    <b> | </b>
                    <NavLink to="/open-an-account"><p>Open An Account</p></NavLink>
                </div>
                <div className="flex place-content-end lg:font-bold lg:px-2 lg:pl-64">
                    <h1 className="flex space-x-2"><BsGlobe2 className="text-center text-lg lg:text-xl my-auto"/><span className="border-white border-2 rounded-xl p-2"> Select Language</span></h1>
                </div>
        </div>
     );
}
 
export default Topbar;