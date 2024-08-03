import bgImgLg from "../assets/Group 1000001745.png"
import bgImgSm from "../assets/iPhone 14 & 15 Pro Max - 6.png"
import LoginForm from "../components/LoginForm";
import FormHeaderContent from "../shareComponents/FormHeaderContent";
import OverlayContainer from "../shareComponents/OverlayContainer";
import SmallDeviceFormHeaderContent from "../shareComponents/SmallDeviceFormHeaderContent";


const Login = () => {
  

  return (
   <div>


           {/* for large device  */}


           <div
    className="lg:flex lg:flex-row lg:items-center h-[750px] gap-10 m-10 hidden">
               {/* info section  */}
<section className="w-1/2">

             {/* form header content*/}
      <FormHeaderContent title='Log In To Your Account' 
         description="Welcome Back! Select a method to log in:">         
      </FormHeaderContent>

                   {/* form  */}
<div className="card bg-white w-full  shrink-0 ">
    <LoginForm></LoginForm>
     
    </div>
</section>

                {/* image section  */}
<section className="w-1/2">

<div className="   h-[750px] rounded-3xl flex items-center justify-center bg-cover bg-center"  style={{ backgroundImage:`url(${bgImgLg})`}}>
<OverlayContainer link='Sign in' title='to view all the' subTitle='massage therapists' >
</OverlayContainer>
                    {/* dots  */}
         <div className="flex gap-3 absolute -bottom-40">
  <span className="w-2 h-2 bg-gray-50  rounded-full"></span>
  <span className="w-2 h-2 bg-blue-400  rounded-full"></span>
  <span className="w-2 h-2 bg-gray-50  rounded-full"></span>
         </div>

</div>
</section>


           </div>  












          {/* for small and medium device */}
     <div 
     className="lg:hidden min-h-[940px] w-full bg-cover bg-center "  
     style={{ backgroundImage:`url(${bgImgSm})`}} >
                
      <div className="px-8 pt-10 pb-10 mx-auto max-w-[300px]  ">
      <SmallDeviceFormHeaderContent
           title='Create Account '
           subTitle='Fill in Your Information'>
          </SmallDeviceFormHeaderContent>
      </div>



      <div className="rounded-t-3xl bg-white w-full  shrink-0 ">
          <LoginForm></LoginForm>
          </div>
     </div>




   </div>
  );
};

export default Login;