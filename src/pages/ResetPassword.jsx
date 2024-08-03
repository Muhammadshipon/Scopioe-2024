import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";



const ResetPassword = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  const handleResetPassword =e=>{
    e.preventDefault();
    const email = e.target.email.value;
    sendPasswordResetEmail(auth, email)
  .then(() => {
    Swal.fire({
      position: "top",
    
      title: 'Password reset email sent! Check Your Email',
      showConfirmButton: false,
      timer: 3000
    });		
    navigate('/login')
  })
  .catch((error) => {
    
    const errorMessage = error.message;
    // ..
    console.log(errorMessage)
  });

  }
  return (
   <div className="flex justify-center items-center min-h-screen">
    <form onSubmit={handleResetPassword} className="lg:w-1/3 w-full px-6 bg-slate-600 h-[100px] rounded-3xl flex justify-center items-center">
    <div className="px-5 w-full">
    <div>
      <label>
        <input name="email" type="email" placeholder="Enter Your Email"  className="w-full mb-3"/>
      </label>
    </div>
    <div>
      <label>
        <input type="submit" value='Reset Your Password' className="bg-blue-500 w-full hover:bg-slate-500" />
      </label>
    </div>
    </div>
    </form>
   </div>
  );
};

export default ResetPassword;