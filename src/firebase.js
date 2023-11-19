// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";  

const firebaseConfig = {
  apiKey: "AIzaSyDPaq9RCdoXbWta0naUMODnTYvY6Re2PS4",
  authDomain: "react-chat-5b892.firebaseapp.com",
  projectId: "react-chat-5b892",
  storageBucket: "react-chat-5b892.appspot.com",
  messagingSenderId: "775083172770",
  appId: "1:775083172770:web:3ae9a6e5deceb6b42548fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);