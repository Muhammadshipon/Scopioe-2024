import { useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link } from "react-router-dom";

const SignUpForm = () => {
  const [showPassword,setShowPassword] = useState(false);
  const [showPassword1,setShowPassword1] = useState(false);
  return (
    <form className="card-body rounded-none pb-20 lg:pb-0">
      <h2 className="font-bold text-center my-8  lg:hidden text-2xl">Create Your Account</h2>
    <div className="form-control">
      <label className="label">
        <span className="label-text font-bold">Name</span>
      </label>
      <input name="name" type="text" placeholder="@username" className=" input input-bordered" required />
    </div>
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

    <div className="form-control">
      <label className="label">
        <span className="label-text font-bold">Confirm Password</span>
      </label>
      <div className="flex items-center w-full relative">
      <input name="confirmPassword"  type={showPassword? "text":"password"}  placeholder="Re-type password" className="input input-bordered w-full" required />
      <span className="right-3 text-gray-500 absolute  text-2xl" onClick={()=>setShowPassword1(!showPassword1)}>
    {showPassword1?<IoMdEyeOff />
     : <IoMdEye />
    
    }
     </span>
      </div>
    
    </div>

       <div className="form-control">
       <label className="label cursor-pointer flex justify-start gap-2">
       <input type="checkbox"  className="checkbox" />
       <span className="label-text text-blue-600">Accept Terms of Service</span>
       </label>
       </div>  

    <div className="form-control mt-6  mx-auto">
      <button className="btn bg-blue-500 text-white w-[270px] ">Sign up</button>
    </div>
    <p className="text-center">Already Have an Account? <span className="text-blue-600" ><Link to='/login'>Log in</Link></span></p>
  </form>
  );
};

export default SignUpForm;