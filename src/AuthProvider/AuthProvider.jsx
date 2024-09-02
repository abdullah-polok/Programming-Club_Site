import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useEffect, createContext, useState } from "react";
import { auth, db } from "../Firebase/firebase.config.js";
import {
  doc,
  getDocs,
  collection,
  query,
  where,
  setDoc,
  getDoc,
  addDoc,
} from "firebase/firestore";

export const AuthContext = createContext(null);

const TOTAL_DURATION_MINUTES = 120;

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [studentdata, setStudentData] = useState({});
  const [profileData, setProfileData] = useState({});
  const [createProblem, setCreateProblem] = useState({});
  const [problemCollections, setProblemCollections] = useState([]);
  const [checkStoredProblem, setCheckStoredProblem] = useState(false);
  const [eachProblem, setEachProblem] = useState({});
  const [outputCode, setOutputCode] = useState({});
  const [codeLength, setCodeLength] = useState(null);
  ////extra login
  const provider = new GoogleAuthProvider();

  /////Setup timer for problem

  const [endTime, setEndTime] = useState(() => {
    const savedEndTime = localStorage.getItem("globalEndTime");
    return savedEndTime ? parseInt(savedEndTime, 10) : null;
  });

  const [isCountdownActive, setIsCountdownActive] = useState(() => !!endTime);

  // Function to start the countdown
  const startCountdown = () => {
    const newEndTime =
      new Date().getTime() + TOTAL_DURATION_MINUTES * 60 * 1000;
    setEndTime(newEndTime);
    localStorage.setItem("globalEndTime", newEndTime);
    setIsCountdownActive(true);
  };

  // Function to reset the countdown
  const resetCountdown = () => {
    localStorage.removeItem("globalEndTime");
    setEndTime(null);
    setIsCountdownActive(false);
  };

  useEffect(() => {
    // Reset countdown if the time has already expired on load
    if (endTime && new Date().getTime() >= endTime) {
      resetCountdown();
    }
  }, [endTime]);

  /////////////End of timer/////////////

  ////Start Probelem sevtion>>>>>>>

  const handleCreateProblem = async () => {
    setLoading(true);
    console.log("Problem inside API", createProblem);
    try {
      // Destructure email and password from userData
      const {
        problemName,
        describeProblem,
        outerInputProblem,
        innerInputProblem,
        inputCodeLength,
        outputProblem,
      } = createProblem;

      const dataToStore = {
        problemName,
        describeProblem,
        outerInputProblem,
        innerInputProblem,
        inputCodeLength,
        outputProblem,
      };
      console.log("Data Stored", dataToStore);
      const docRef = await addDoc(collection(db, "problemsData"), {
        dataToStore,
      });

      setCheckStoredProblem(true);
    } catch (err) {
      console.log("Error in Storing", err);
    } finally {
      setLoading(false);
    }
  };

  const handleGetProblem = async () => {
    try {
      // Reference to the 'problems' collection
      const problemCollectionRef = collection(db, "problemsData");

      // Get all documents in the 'problems' collection
      const querySnapshot = await getDocs(problemCollectionRef);

      // Iterate over each document in the collection
      const problems = querySnapshot.docs.map((doc) => ({
        id: doc.id, // Document ID
        ...doc.data(), // Document data
      }));

      // Log all problems data
      // console.log(problems);
      setProblemCollections(problems);

      return problems; // Return problems array if needed
    } catch (error) {
      console.log("Error fetching products:", error);
    }
  };

  //////End of Problem section>>>>>>>>>>

  const getStudent = async () => {
    if (user) {
      try {
        const userDocRef = doc(db, "usersData", user.uid);
        const userDocSnap = await getDoc(userDocRef);
        if (userDocSnap.exists()) {
          const studentData = userDocSnap.data().dataToStore;
          setProfileData(studentData);
        } else {
          console.log("No user data found for this UID.");
        }
      } catch (error) {
        console.log("Error fetching user data:", error);
      }
    } else {
      console.log("User is not authenticated");
    }
  };

  const addStudent = async () => {
    setLoading(true);
    console.log("Data inside API", studentdata);
    try {
      // Destructure email and password from userData
      const { uid, name, email, phonenumber, faculty, year, ukhemail, role } =
        studentdata;

      const dataToStore = {
        uid,
        name,
        email,
        phonenumber,
        faculty,
        year,
        ukhemail,
        role,
      };
      console.log("Data Stored", dataToStore);
      // Store data in Firestore
      // await setDoc(doc(db, "usersData", name), dataToStore);
      await setDoc(doc(db, "usersData", uid), {
        dataToStore,
      });
      console.log("student data save successfully");
    } catch (err) {
      console.log("Error in Storing", err);
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
      handleGetProblem();
      setStudentData({});
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (!checkStoredProblem) getStudent();
  }, [user]);

  const userInfo = {
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
    profileData,
    createProblem,
    setCreateProblem,
    handleCreateProblem,
    checkStoredProblem,
    problemCollections,
    eachProblem,
    setEachProblem,
    outputCode,
    setOutputCode,
    codeLength,
    setCodeLength,
    endTime,
    isCountdownActive,
    startCountdown,
    resetCountdown,
  };

  // console.log(problemCollections);
  // console.log("Loaded student data", );
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
