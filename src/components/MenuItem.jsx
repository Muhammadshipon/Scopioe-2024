import { FaSearch, FaUserFriends } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { IoHome, IoSettingsSharp } from "react-icons/io5";
import { MdFavorite, MdHelpCenter } from "react-icons/md";


const MenuItem = () => {
  return (
    <div>
      <div className="w-full flex gap-2  px-5 bg-blue-200 hover:bg-gray-200   hover:scale-105  items-center py-2 ">
        <span className="text-xl"><IoHome /></span>
        <span className="font-semibold text-gray-700 hover:text-black text-xl">Home</span>
      </div>
      <div className="w-full flex gap-2 px-5 hover:bg-gray-200   hover:scale-105  items-center py-2">
        <span className="text-xl"><FaUserFriends /></span>
        <span className="font-semibold text-gray-700 hover:text-black text-xl">New Listing</span>
      </div>
      <div className="w-full flex gap-2 px-5 hover:bg-gray-200   hover:scale-105  items-center py-2">
        <span className="text-xl"><FaSearch /></span>
        <span className="font-semibold text-gray-700 hover:text-black text-xl">Search</span>
      </div>
      <div className="w-full flex gap-2 px-5 hover:bg-gray-200   hover:scale-105  items-center py-2">
        <span className="text-xl"><GiNotebook /></span>
        <span className="font-semibold text-gray-700 hover:text-black text-xl">About</span>
      </div>
      <div className="w-full flex gap-2 px-5 hover:bg-gray-200   hover:scale-105  items-center py-2">
        <span className="text-xl"><MdFavorite /></span>
        <span className="font-semibold text-gray-700 hover:text-black text-xl">Favorites</span>
      </div>
      <div className="divider"></div>
      <div className="w-full flex gap-2 px-5 hover:bg-gray-200   hover:scale-105  items-center py-2">
        <span className="text-xl"><MdHelpCenter /></span>
        <span className="font-semibold text-gray-700 hover:text-black text-xl">Help Center</span>
      </div>
      <div className="w-full flex gap-2 px-5 hover:bg-gray-200   hover:scale-105  items-center py-2">
        <span className="text-xl"><IoSettingsSharp /></span>
        <span className="font-semibold text-gray-700 hover:text-black text-xl">Settings</span>
      </div>
    </div>
  );
};

export default MenuItem;