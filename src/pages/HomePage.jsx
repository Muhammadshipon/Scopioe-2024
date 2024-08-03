import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";


const HomePage = () => {
  const navigate = useNavigate();
  const {user,logOut} = useContext(AuthContext);
  return (
    <div>
     <h1>Welcome <span>{user?.displayName}</span></h1>
     <button onClick={()=>logOut().then(()=>navigate('/login'))}>
      logOut
     </button>
    </div>
  );
};

export default HomePage;