import { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [showPassword,setShowPassword] = useState(false);
 
  return (
   <div className="pb-8 lg:pb-0">
      <h2 className="font-bold text-center  pt-10 lg:hidden text-2xl">Log In To Your Account</h2>
      <p className=" text-center lg:hidden ">Welcome Back! Select a method to log in:</p>
               {/* social media sign in  */}
     <div className="flex justify-around py-10">
      <button className="flex items-center gap-1 bg-gradient-to-r from-gray-300 to-white px-7 py-2 rounded-xl hover:scale-90 shadow-xl  border border-r-2 border-gray-300"><FcGoogle className="text-2xl"/><span className="text-gray-500 font-bold text-xl">Google</span></button>
      <button className="flex items-center gap-1 bg-gradient-to-r from-blue-500 to-blue-700 text-white px-5 py-2 rounded-xl hover:scale-90 shadow-xl"><FaFacebook className="text-white text-2xl" /><span className="text-white font-bold text-xl">Facebook</span></button>
      </div>       
      <div className="divider">OR Continue With Email</div>   
                {/* form             */}
     <form className="card-body rounded-none pb-20 lg:pb-0">
    <div className="form-control">
      <label className="label">
        <span className="label-text font-bold">Email</span>
      </label>
      <input name="email" type="email" placeholder="Enter your email" className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text font-bold">Password</span>
      </label>
      <div className="flex items-center w-full relative">
      <input name="password" type={showPassword? "text":"password"}  placeholder="Enter your password" className="input input-bordered w-full" required />
      <span className="right-3 text-gray-500 absolute  text-2xl" onClick={()=>setShowPassword(!showPassword)}>
    {showPassword?<IoMdEyeOff />
     : <IoMdEye />
    
    }
     </span>
      </div>
    
    </div>
    <div className="flex justify-between items-center">
       <label className="label cursor-pointer flex justify-start gap-2">
       <input type="checkbox"  className="checkbox" />
       <span className="label-text ">Remember Me</span>
       </label>
     <label>  <p className="text-blue-600 underline">Forget Password?</p></label>
    </div>  

    <div className="form-control mt-6  mx-auto">
      <button className="btn bg-blue-500 text-white w-[270px] text-xl">Sign in</button>
    </div>
    <p className="text-center">Don’t Have an Account?  <span className="text-blue-600" ><Link to='/'>Create Account</Link></span></p>
  </form>
   </div>
  );
};

export default LoginForm;