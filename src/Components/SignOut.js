import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const SignOut = ({})=>{
    const navigate = useNavigate();
    const handleSignOut = ()=>{
        signOut(auth).then(() => {
        // Sign-out successful.
        }).catch((error) => {
        // An error happened.
        navigate("/error");
        });
    }
    return (
        <div className="absolute top-28 right-6">
            <button className="border border-black rounded-lg p-2 bg-red-600 text-white"  onClick={handleSignOut}>Sign Out</button>
        </div>
    )
}

export default SignOut;