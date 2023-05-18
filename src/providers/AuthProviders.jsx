import React, { createContext, useState } from 'react'
import {  createUserWithEmailAndPassword,onAuthStateChanged,signInWithEmailAndPassword,GoogleAuthProvider,signInWithPopup, getAuth  } from "firebase/auth";
import app from '../firebase.config';
const googleProvider = new GoogleAuthProvider();
export const AuthContext = createContext()
const auth = getAuth(app);
function AuthProviders({children}) {
  const [user,setUser] = useState(null)
  const [loading,setLoading] =useState(true)
  // const [photoURL, setPhotoURL] = useState('');
  // const [photoFile, setPhotoFile] = useState(null);

  const createUser =(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password) 
    
  }
  const logOut = () => {
    return signOut(auth)
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
  
  // google provider
  const signInGoogle = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }
  const signIn = (email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
  }



  const authInfo ={
      user,
      loading,
      createUser,
      signIn,
      signInGoogle
  }
  return (
    <AuthContext.Provider value={authInfo}>
    {children}
    </AuthContext.Provider>
  )
}

export default AuthProviders