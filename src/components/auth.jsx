import { auth } from "../config/firebase-congig";
import { useState } from "react";
import { createUserWithEmailAndPassword , signInWithPopup} from "firebase/auth";

export const Auth= ()=>{

    const [email,setEmail]=useState("");
    const [password ,setPassword]=useState("");
    const handleSignIn=async ()=>{
        console.log(email);
        console.log(password);
        console.log(auth?.currentUser?.email);
        await createUserWithEmailAndPassword(auth,email,password);

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
            </div>
    );
};