import React from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../Firbase/Firebase.init";

const registerUser = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};
const loginUser = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};
const AuthInfo = {
  registerUser,
  loginUser,
};
const AuthProvider = ({ children }) => {
  return <AuthContext value={AuthInfo}>{children}</AuthContext>;
};

export default AuthProvider;
