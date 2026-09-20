import {auth} from "./firebase";

import { signInWithEmailAndPassword } from "firebase/auth";

function signInUser(email,password,setErrorMessage){
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+":"+errorMessage);
  });
}

export default signInUser