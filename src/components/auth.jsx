import { auth , googleProvider } from "../config/firebase-config";
import { useState } from "react";
import { createUserWithEmailAndPassword , signInWithPopup , signOut} from "firebase/auth";

export const Auth= ()=>{

    const [email,setEmail]=useState("");
    const [password ,setPassword]=useState("");

    const handleSignIn=async ()=>{
        try{
            console.log(email);
            console.log(password);
            console.log(auth?.currentUser?.email);
            await createUserWithEmailAndPassword(auth,email,password);
        }catch(error){
            console.log(error);
        }

    };

    const handleSignInGoogle=async ()=>{
        try{
            console.log(auth?.currentUser?.email);
            await signInWithPopup(auth,googleProvider);
        }catch(error){
            console.log(error);
        }
    }

    const handleLogOut = async()=>{
        try{
            console.log(auth?.currentUser?.email);
            await signOut(auth);
            console.log(auth?.currentUser?.email);

        }catch(error){
            console.log(error);
        }
    };

    return (
            <div>
                <input placeholder="Email..." 
                    onChange={(e)=> setEmail(e.target.value)}
                />
                <input placeholder="Password..."
                    onChange={(e)=> setPassword(e.target.value)}
                    type="password"
                />
                <button onClick={handleSignIn}>Sign In </button>
                <button onClick={handleSignInGoogle}>Google Sign-In</button>
                <button onClick={handleLogOut}> LogOut </button>
            </div>
    );
};