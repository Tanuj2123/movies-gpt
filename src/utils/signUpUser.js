import { auth } from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { updateProfile } from "firebase/auth";
import { addUser } from "./userSlice";


function signUpUser(name,email,password,setErrorMessage,navigate,dispatch){

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        updateProfile(auth.currentUser, {
            displayName:name
            }).then(() => {
            // Profile updated!
                dispatch(addUser({uid:user.uid,email:user.email,displayName:user.displayName}));
                navigate("/browse");
            // ...
            }).catch((error) => {
            // An error occurred
            // ...
        });
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode+":"+errorMessage);
    });
}

export default signUpUser;

