
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCgbRTBT9WzGwxwPEsPWrDcknK29CaOFNo",
  authDomain: "boltz-headphones.firebaseapp.com",
  projectId: "boltz-headphones",
  storageBucket: "boltz-headphones.appspot.com",
  messagingSenderId: "284062143533",
  appId: "1:284062143533:web:bf867eb3f72a31a22594a4",
  measurementId: "G-JLQ3BX7RC9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const  auth = getAuth();
export const provider = new GoogleAuthProvider()