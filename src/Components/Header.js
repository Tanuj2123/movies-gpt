import { useEffect, useState } from "react";
import SignOut from "./SignOut";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { NETFLIX_LOGO,USER_LOGO } from "../utils/constants";
import { toggleGPTSearch } from "../utils/GPTSlice";


const Header = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const showGPTSearch = useSelector(state=>state.GPT.GPTSearch);

  const [showSignOut,setShowSignOut] = useState(false);
  const user = useSelector((state)=>state.user)

  const handleMouseEnter = ()=>{
    setShowSignOut(!showSignOut);
  }

  const handleGPTSearchClick = ()=>{
    dispatch(toggleGPTSearch());
  }


  useEffect(()=>{
      const unsubscribe =  onAuthStateChanged(auth, (user) => {
          if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              const {uid,email, displayName}= user;
              dispatch(addUser({uid:uid,email:email, displayName:displayName}));
              navigate("/browse");
              // ...
          } else {
              // User is signed out
              // ...
              dispatch(removeUser());
              navigate("/");
          }
      });

      return ()=> unsubscribe();
  },[])





  return (
    <div className=" absolute flex justify-between w-screen">
       <img className='w-64 m-4 p-4' src={NETFLIX_LOGO} alt='logo-img'></img> 
       {user && 
        <div className="flex">
        <button className="text-white bg-red-600 rounded-lg  w-24 h-12 my-10 mx-4" onClick={handleGPTSearchClick}>
          {showGPTSearch? <span>Browse Page</span> :<span>GPT Search</span>}
          </button>
        <div className="flex m-4 p-4" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseEnter}>
          <img className="size-16 cursor-pointer rounded-lg"  src={USER_LOGO}></img>
          {showSignOut && <SignOut/>}
       </div></div>}
    </div>
  )
}

export default Header