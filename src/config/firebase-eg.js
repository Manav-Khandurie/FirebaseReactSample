//Rename this file to firebase-config.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";//Get Authentication 

const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
