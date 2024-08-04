import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import MenuItem from "../components/MenuItem";
import Navbar from "../components/Navbar";


const HomePage = () => {
 
  return (
    <div className="flex flex-row min-h-screen">
     {/* <h1>Welcome <span>{user?.displayName}</span></h1>
     <button onClick={()=>logOut().then(()=>navigate('/login'))}>
      logOut
     </button> */}
                   {/* sidebar  section*/}
      <aside className="w-1/5 shadow-2xl">
                      {/* logo  */}
        <div className="w-full py-10 pl-5">
        <h1 className="text-5xl text-blue-500 font-serif text-center lg:text-left  ">Scopioe</h1>
        </div>
                      {/* menu  */}
       <MenuItem></MenuItem>   
      </aside>





                    {/* main section  */}
      <main className="w-full bg-[#A7A8A8]">
               {/* navbar  */}
         <Navbar></Navbar>     




      </main>
    </div>
  );
};

export default HomePage;