import { Link } from "react-router-dom";


const FormHeaderContent = ({title,description,link}) => {
  return (
    <div className="max-w-[400px] ml-9">
               
  <h1 className="text-5xl text-blue-500 font-serif text-center lg:text-left">Scopioe</h1>
  <h3 className="text-2xl font-bold mt-5 mb-2 ">{title}</h3>
  <p className="text-white lg:text-black">
    {description} <span className="underline text-blue-400"><Link to='/privacy-policy'>{link}</Link></span>
  </p>
  
</div>
  );
};

export default FormHeaderContent;