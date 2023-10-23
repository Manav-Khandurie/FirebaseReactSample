import { initializeApp } from "firebase/app";
import { getAuth ,GoogleAuthProvider } from "firebase/auth";//Get Authentication 
import { getFirestore } from "firebase/firestore"
 
const firebaseConfig = {
    apiKey: "AIzaSyB60yaWiefovhGXYSSqMkhX8F9w951A0D0",
    authDomain: "testproject-96e35.firebaseapp.com",
    projectId: "testproject-96e35",
    storageBucket: "testproject-96e35.appspot.com",
    messagingSenderId: "44463037852",
    appId: "1:44463037852:web:5bc68206f0ce7db3833c59",
    measurementId: "G-LKKN1RY77E"
  };//remove this

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db= getFirestore(app);
export const auth=getAuth(app);
export const googleProvider=new GoogleAuthProvider();
