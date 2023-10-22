import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";//Get Authentication 



// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
