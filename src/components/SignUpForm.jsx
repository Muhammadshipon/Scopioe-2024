import { useContext, useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { sendEmailVerification, updateProfile } from "firebase/auth";
import Swal from "sweetalert2";

const SignUpForm = () => {
  const navigate = useNavigate();
  const { setUser, createUser} = useContext(AuthContext);
  const [showPassword,setShowPassword] = useState(false);
  const [showPassword1,setShowPassword1] = useState(false);

	const handleSignUp = e =>{
		e.preventDefault();
    const form = e.target;
		const name = form.name.value;
		const email = form.email.value;
		const password = form.password.value;
		const confirmPassword = form.confirmPassword.value;
		console.log(name,email,password,confirmPassword)
    
    
    if(password!==confirmPassword){
      Swal.fire({
        position: "top",
        icon: "error",
        title: "Password do not match with Confirm Password",
        showConfirmButton: false,
        timer: 3000
      });
    
      return;
    }
        //  handle error 
    if(!/^(?=.*[a-z])(?=.*[A-Z]).*$/.test(password)){
      Swal.fire({
        position: "top",
        icon: "error",
        title: "Your password should have at least one upperCase and lowerCase character",
        showConfirmButton: false,
        timer: 3000
      });
      
      return ;
    }
   
    else if(password.length<6){
      Swal.fire({
        position: "top",
        icon: "error",
        title: "password must be at least 6 character",
        showConfirmButton: false,
        timer: 3000
      });
    return ;
    }



		createUser(email,password)
    .then(result=>{
      console.log(result.user);
      updateProfile(result.user, {
        displayName: name
      }).then(() => {
        setUser(result.user)
        navigate("/login")

      }).catch(() => {
        
      });
            // send email validation 
      sendEmailVerification(result.user)
     .then(() => {
      Swal.fire({
      position: "top",
      title: "Please Verify Your Email",
      showConfirmButton: false,
      timer: 3000
    });	

  });


  
		
    })
    .catch(error=>{
      console.error(error);
      Swal.fire({
        position: "top",
        icon: "error",
        title: error.message,
        showConfirmButton: false,
        timer: 3000
      });			
			
    })
	}

	





  return (
    <form onSubmit={handleSignUp} className="card-body rounded-none pb-20 lg:pb-0">
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
      <input name="confirmPassword"  type={showPassword1? "text":"password"}  placeholder="Re-type password" className="input input-bordered w-full" required />
      <span className="right-3 text-gray-500 absolute  text-2xl" onClick={()=>setShowPassword1(!showPassword1)}>
    {showPassword1?<IoMdEyeOff />
     : <IoMdEye />
    
    }
     </span>
      </div>
    
    </div>

       <div className="form-control">
       <label className="label cursor-pointer flex justify-start gap-2">
       <input type="checkbox"  className="checkbox" required/>
       <span className="label-text text-blue-600">Accept Terms of Service</span>
       </label>
       </div>  

    <div className="form-control mt-6  mx-auto">
      <button className="btn bg-blue-500 text-white w-[270px] text-xl">Sign up</button>
    </div>
    <p className="text-center">Already Have an Account? <span className="text-blue-600" ><Link to='/login'>Log in</Link></span></p>
  </form>
  );
};

export default SignUpForm;