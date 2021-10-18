import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut   } from "firebase/auth";
import { useEffect, useState } from "react";
import initialization from "./firebase-init";
initialization()
const useAuth = ()=>{
    const [user,setUser] = useState({})
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const googleSignIn = ()=>{
        signInWithPopup(auth, provider)
        .then(result =>{
            const user = result.user
            console.log(user)
            setUser(user)
        })

    }
    const logOut = ()=>{
        const auth = getAuth();
signOut(auth).then(() => {
  // Sign-out successful.
  setUser({})
}).catch((error) => {
  // An error happened.
});
    }


    
        useEffect(()=>{
            const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
   setUser(user)
    // ...
  } 
});
        },[])

    return{
        googleSignIn,
        user,
        logOut
    }

}

export default useAuth;