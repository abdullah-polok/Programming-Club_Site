import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useEffect, createContext, useState } from "react";
import { auth } from "../Firebase/firebase.config.js";
import { db } from "../../Firebase/firebase.js";
import { doc, setDoc } from "firebase/firestore";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [brandName, setBrandName] = useState([]);
  const [loading, setLoading] = useState(true);
  const [studentdata, setStudentData] = useState({});
  ////extra login
  const provider = new GoogleAuthProvider();

  const addStudent = async () => {
    setLoading(true);
    console.log("Data inside API", studentdata);
    try {
      // Destructure email and password from userData
      const {
        uid,
        name,
        email,
        phonenuumber,
        department,
        year,
        ukhemail,
        role,
      } = studentdata;

      const dataToStore = {
        uid,
        name,
        email,
        phonenuumber,
        department,
        year,
        ukhemail,
        role,
      };

      // Store data in Firestore
      // await setDoc(doc(db, "usersData", name), dataToStore);
      await setDoc(
        doc(db, "usersData", `${name + "(" + department + ")"}`),
        dataToStore
      );
      console.log("student data save successfully");
    } catch (err) {
      console.log("Error in Storing");
    } finally {
      setLoading(false);
    }
  };

  ///create user using firebase
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  ///signInUser

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const loginUserPop = () => {
    return signInWithPopup(auth, provider);
  };

  ///log out user
  const logoutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const userInfo = {
    brandName,
    setBrandName,
    user,
    setUser,
    loading,
    setLoading,
    signInUser,
    loginUserPop,
    logoutUser,
    createUser,
    studentdata,
    setStudentData,
    addStudent,
  };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
