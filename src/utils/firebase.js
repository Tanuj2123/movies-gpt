// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "moviesgpt-47822.firebaseapp.com",
  projectId: "moviesgpt-47822",
  storageBucket: "moviesgpt-47822.firebasestorage.app",
  messagingSenderId: "925579732739",
  appId: "1:925579732739:web:2e6f65e4e789c57ee5ab36",
  measurementId: "G-9WTDW25K2E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();