import { useContext } from "react";
import { FaBell, FaChevronDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { MdOutlineExitToApp } from "react-icons/md";


const Navbar = () => {
  const navigate = useNavigate();
  const {user,logOut} = useContext(AuthContext);
  return (
    <nav className="bg-white py-3 shadow-xl flex justify-between items-center">


      {/* nav start  */}
  <div className="flex items-center gap-3 pl-5">
  <div className="avatar">
  <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
    <img src={user?.photoURL} />
  </div>
</div>
       <div>
       <h3 className="flex items-center gap-4 text-lg font-bold">{user?.displayName}<span className="hover:scale-125"><FaChevronDown /></span></h3>
       <p className="text-gray-400 text-sm">{user?.email}</p>
       </div>
 </div>


      {/* nav end  */}
      <div className="flex flex-row gap-10 item-center justify-center">
       <button className="hover:scale-110 w-10 h-10 flex items-center justify-center border border-gray-200  rounded-full"> <span className="text-xl"><FaBell /></span></button>
    <button className=" flex items-center mr-5 text-red-600 text-lg hover:pr-3 font-bold">Log Out <span className="w-10 h-10 flex items-center justify-center border border-gray-200  rounded-full text-2xl ml-5 "><MdOutlineExitToApp /></span></button>
      </div>
    </nav>
  );
};

export default Navbar;