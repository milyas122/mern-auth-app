// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-20792.firebaseapp.com",
  projectId: "mern-auth-20792",
  storageBucket: "mern-auth-20792.appspot.com",
  messagingSenderId: "334496361098",
  appId: "1:334496361098:web:0c76e0bd8838f8fab99b73",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
