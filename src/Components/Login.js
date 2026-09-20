import Header from "./Header";
import { useState,useRef} from "react";
import { checkValidData } from "../utils/validate";
import signUpUser from "../utils/signUpUser";
import signInUser from "../utils/signInUser";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { BACKGROUND_IMAGE } from "../utils/constants";

const Login = () => {

  const [signIn,setSignIn] = useState(true);
  const [errorMessage,setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch()


  const email = useRef(null);
  const password = useRef(null);
  const name =  useRef(null);

  const toggleSignInForm = ()=>{
     setSignIn(!signIn);
  }

  const handleSubmitClick = ()=>{
    const isNotValid = checkValidData(email.current.value,password.current.value);
    setErrorMessage(isNotValid);

    if(isNotValid) return;

    //signup/signin user

    if(!signIn){
      const isSignedUp = signUpUser(name.current.value,email.current.value,password.current.value,setErrorMessage,navigate,dispatch);
    }
    else{
      const isSignedIn = signInUser(email.current.value,password.current.value,setErrorMessage,navigate);
      if(isSignedIn){
        navigate("/browse");
      }
    }
  }

  return (
    <div className='relative'>
      <Header/>
      <div>
        <img className="w-full h-full object-contain"src={BACKGROUND_IMAGE} alt="bg-image"></img>
      </div>
      <form onSubmit={(e)=> e.preventDefault()} className=" rounded-xl bg-black text-white flex flex-col items-center absolute top-32 left-[37rem] m-4 px-8 py-20 opacity-80">
        <h1 className="text-2xl">Sign {signIn===true?<span>In</span>:<span>Up</span>}</h1>
        {!signIn && <input ref={name}type="text" placeholder="Full Name" className="m-6 p-2 w-56 bg-gray-700"></input>}
        <input ref={email} type="text" placeholder="Email Address" className="m-6 p-2 w-56 bg-gray-700"/>
        <input ref={password} type="password" placeholder="Password" className="m-6 p-2 w-56 bg-gray-700"/>

        <p className="text-red-600 font-bold">{errorMessage}</p>
        <button type="submit" className="rounded-lg m-6 px-10 py-2 bg-red-600" onClick={handleSubmitClick}>Sign {signIn===true?<span>In</span>:<span>Up</span>}</button>
       {signIn ?<p className="m-2 p-2 "> New to movies-gpt?<span onClick={toggleSignInForm} className="cursor-pointer hover:opacity-75"> Sign up Now</span></p>:<p className="m-2 p-2 text-white"> Have an Account?<span onClick={toggleSignInForm} className="cursor-pointer hover:opacity-75"> Sign In Now</span></p>}
      </form>
    </div>
  )
}

export default Login;