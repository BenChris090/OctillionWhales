import { NavLink} from "react-router-dom";

const Four0Four = () => {
    return ( 
        <div className="404 h-full px-10 py-32 text-center items-center m-auto lg:p-20 overflow-hidden">
            <div className="space-y-4">
                <h1 className="text-6xl lg:text-[10rem] font-bold">4 0 4</h1>
                <p className="text-3xl lg:text-5xl font-medium">Page Not Found</p>
                <p className="font-medium">The requested resource could not be found on this server!</p>
                <h1 className="p-4"><NavLink to="/" className="p-4 text-white text-center font-medium bg-cyan-900 rounded-2xl">Return To Home Page</NavLink></h1>
            </div>
        </div>
     );
}
 
export default Four0Four;