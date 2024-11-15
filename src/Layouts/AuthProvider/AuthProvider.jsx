import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../../Firebase/firebase.config";
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  // User sign up
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Observer function
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currUser) => {
      setUser(currUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  //   User Login
  const userLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // User Updated profile

  const updatedProfile = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData)
  }

  //   User logout
  const userLogout = () => {
    setLoading(true);
    return signOut(auth);
  };

  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const authInfo = {
    user,
    setUser,
    createUser,
    userLogout,
    userLogin,
    loading,
    updatedProfile
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
