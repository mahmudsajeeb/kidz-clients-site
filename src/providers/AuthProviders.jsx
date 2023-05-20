import React, { createContext,useEffect, useState } from 'react'
import {  createUserWithEmailAndPassword,onAuthStateChanged,signInWithEmailAndPassword,GoogleAuthProvider,signInWithPopup,signOut, getAuth  } from "firebase/auth";
import app from '../firebase.config';
const googleProvider = new GoogleAuthProvider();
export const AuthContext = createContext()
const auth = getAuth(app);
function AuthProviders({children}) {
  const [user,setUser] = useState( )
  const [loading,setLoading] = useState(true)
  // const [photoURL, setPhotoURL] = useState('');
  // const [photoFile, setPhotoFile] = useState(null);

  const createUser =(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password) 
    
  }
   // google provider
   const signInGoogle = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }
  const signIn = (email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
  }
 
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (signinuser) => {
      setUser(signinuser)
      setLoading(false)
    })
    return () =>{
      unsubscribe()
    }
  },[])
  
  const logOut = () => {
    return signOut(auth)
  }




  const authInfo ={
      user,
      loading,
      createUser,
      signIn,
      logOut,
      signInGoogle
  }
  return (
    <AuthContext.Provider value={authInfo}>
    {children}
    </AuthContext.Provider>
  )
}

export default AuthProviders