import Header from "./Header";
import { useState } from "react";

const Login = () => {

  const [signIn,setSignIn] = useState(true);

  const toggleSignInForm = ()=>{
     setSignIn(!signIn);
  }

  return (
    <div className='relative'>
      <Header/>
      <div>
        <img className="w-full h-full object-contain"src="https://assets.nflxext.com/ffe/siteui/vlv3/ae999ff9-5858-4638-b0f2-8abcf9fb6a08/web/IN-en-20260831-TRIFECTA-perspective_8fd44dcf-63ea-4547-8e1e-e5fc7e03883d_large.jpg" alt="bg-image"></img>
      </div>
      <form className=" rounded-xl bg-black text-white flex flex-col items-center absolute top-32 left-[37rem] m-4 px-8 py-20 opacity-80">
        <h1 className="text-2xl">Sign {signIn===true?<span>In</span>:<span>Up</span>}</h1>
        {!signIn && <input type="text" placeholder="Full Name" className="m-6 p-2 w-56 bg-gray-700"></input>}
        <input type="text" placeholder="Email Address" className="m-6 p-2 w-56 bg-gray-700"/>
        <input type="password" placeholder="Password" className="m-6 p-2 w-56 bg-gray-700"/>
        <button type="submit" className="rounded-lg m-6 px-10 py-2 bg-red-600">Sign {signIn===true?<span>In</span>:<span>Up</span>}</button>
       {signIn ?<p className="m-2 p-2 "> New to movies-gpt?<span onClick={toggleSignInForm} className="cursor-pointer hover:opacity-75"> Sign up Now</span></p>:<p className="m-2 p-2 text-white"> Have an Account?<span onClick={toggleSignInForm} className="cursor-pointer hover:opacity-75"> Sign In Now</span></p>}
      </form>
    </div>
  )
}

export default Login;