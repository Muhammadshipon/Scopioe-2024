import { useState } from "react";
import bgImgLg from "../assets/Group 1000001745.png"
import bgImgSm from "../assets/iPhone 14 & 15 Pro Max - 6.png"
import SignUpForm from "../components/SignUpForm";
import FormHeaderContent from "../shareComponents/FormHeaderContent";
import OverlayContainer from "../shareComponents/OverlayContainer";
import SmallDeviceFormHeaderContent from "../shareComponents/SmallDeviceFormHeaderContent";


const CreateAccount = () => {
  const [openForm,setOpenForm] = useState(false);

  return (
   <div>


           {/* for large device  */}


           <div
    className="lg:flex lg:flex-row lg:items-center h-[750px] gap-10 m-10 hidden">
               {/* info section  */}
<section className="w-1/2">

             {/* form header content*/}
      <FormHeaderContent title='Create Your Account' 
         description=" Welcome Back! By click the sign up button, you re agree to  Zenitood Terms and Service and acknlowledge the" link="Privacy and Policy">         
      </FormHeaderContent>

                   {/* form  */}
<div className="card bg-white w-full  shrink-0 ">
    <SignUpForm></SignUpForm>
     
    </div>
</section>

                {/* image section  */}
<section className="w-1/2">
<div className="   h-[750px] rounded-3xl flex items-center justify-center bg-cover bg-center"  style={{ backgroundImage:`url(${bgImgLg})`}}>
<OverlayContainer></OverlayContainer>
</div>
</section>


          </div>  












          {/* for small and medium device */}
     <div 
     className="lg:hidden min-h-[940px]  bg-cover bg-center"  
     style={{ backgroundImage:`url(${bgImgSm})`}} >
                
      <div className="px-8 pt-10 pb-10 ">
        {
          openForm? <SmallDeviceFormHeaderContent
           title='Create Account '
           subTitle='Fill in Your Information'>
          </SmallDeviceFormHeaderContent> :
           <FormHeaderContent title='Create Your Account' 
           description=" Welcome Back! By click the sign up button, you re agree to  Zenitood Terms and Service and acknlowledge the" link="Privacy and Policy">         
        </FormHeaderContent>
        }
      </div>



      <div onClick={()=>setOpenForm(true)} >
        {
          openForm? <div className="rounded-t-3xl bg-white w-full  shrink-0 ">
          <SignUpForm></SignUpForm>
          </div>
          : 
         <div className="px-14 ">
           <OverlayContainer ></OverlayContainer>
         </div>
        }
      
      </div>
     </div>




   </div>
  );
};

export default CreateAccount;