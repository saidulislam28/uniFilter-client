import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import useAxiosPublic from "../hooks/useAxiosPublic";


export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
const axiosPublic = useAxiosPublic();
  // const axiosPublic = useAxiosPublic();
  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateProfileinfo = (name) =>{
    return  updateProfile(auth.currentUser, {
      displayName: name
    })
  }

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  console.log(user);

  const sharedInfo = {
    user, 
    loading,
    logOut,
    signIn,
    signUp,
    updateProfileinfo
  };

  return (
    <AuthContext.Provider value={sharedInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
