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
  setDoc,
  getDoc,
  addDoc,
} from "firebase/firestore";
import { useLocation } from "react-router-dom";

export const AuthContext = createContext(null);

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
  const [timeTaken, setTimeTaken] = useState(null);
  const [problemStatus, setProblemStatus] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [timeDuration, setTimeDuration] = useState(null);
  ////extra login
  const provider = new GoogleAuthProvider();

  //////////Contest score and timer/////////
  const setContestTime = async () => {
    try {
      // Reference to the 'problems' collection
      const problemCollectionRef = collection(db, "contestTimeSet");

      // Get all documents in the 'problems' collection
      const querySnapshot = await getDocs(problemCollectionRef);

      // Iterate over each document in the collection
      const problemsTime = querySnapshot.docs.map((doc) => ({
        id: doc.id, // Document ID
        ...doc.data(), // Document data
      }));

      // Log all problems data
      // console.log(problems);
      // console.log(problemsTime[0]?.starTime);

      // console.log(problemsTime[0]?.endTime);
      setStartTime(new Date(problemsTime[0]?.starTime));
      setEndTime(new Date(problemsTime[0]?.endTime));
      setTimeDuration(parseInt(problemsTime[0]?.timeDuration));
      // Return problems array if needed
    } catch (error) {
      console.log("Error fetching products:", error);
    }
  };
  const calculateTimeLeft = () => {
    if (!startTime || !endTime) return 0;
    const currentTime = new Date();
    // If current time is before start time, show countdown to start time
    if (currentTime < startTime) return startTime;
    // If current time is between start and end time, show countdown to end time
    if (currentTime >= startTime && currentTime <= endTime) return endTime;
    // If current time is past the end time, countdown has finished
    return null;
  };

  const countdownDate = calculateTimeLeft();

  const handleFinishedContest = async () => {
    console.log("Finished contest");
    const firstscores = localStorage.getItem("firstscores");
    const secondscores = localStorage.getItem("secondscores");
    const thirdscores = localStorage.getItem("thirdscores");
    const forthscores = localStorage.getItem("forthscores");
    const name = profileData.name;
    const email = profileData.email;
    const faculty = profileData.faculty;
    const scoreInfo = {
      name,
      firstscores,
      secondscores,
      thirdscores,
      forthscores,
      email,
      faculty,
    };
    console.log(scoreInfo);
    const docRef = await addDoc(collection(db, "participantInfo"), {
      scoreInfo,
    });
  };
  const CreateProblemScore = (
    problemNum,
    codeLength,
    inputCodeLengthInt,
    outputProblem,
    result
  ) => {
    console.log("Time Duration,", timeDuration);
    console.log("timeTaken", timeTaken);
    setProblemStatus(true);
    const problemNumber = parseInt(problemNum);
    const outputProblemIn = parseInt(outputProblem);
    const resultIn = parseInt(result);

    if (codeLength > inputCodeLengthInt && outputProblemIn === resultIn) {
      if (problemNumber === 1) {
        const firstscores =
          100 * (1 - (timeDuration - timeTaken) / timeDuration);
        console.log(firstscores);
        localStorage.setItem("firstscores", firstscores);
      } else if (problemNumber === 2) {
        const Secondscores =
          200 * (1 - (timeDuration - timeTaken) / timeDuration);
        console.log(Secondscores);
        localStorage.setItem("secondscores", Secondscores);
      } else if (problemNumber === 3) {
        const Thirdscores =
          300 * (1 - (timeDuration - timeTaken) / timeDuration);
        localStorage.setItem("thirdscores", Thirdscores);
      } else if (problemNumber === 4) {
        const Forthscores =
          400 * (1 - (timeDuration - timeTaken) / timeDuration);
        localStorage.setItem("forthscores", Forthscores);
      }
    } else {
      console.log("Not Assign ");
    }
  };

  const getProblemScrore = () => {};

  ////Start Probelem sevtion>>>>>>>

  const handleCreateProblem = async () => {
    setLoading(true);
    console.log("Problem inside API", createProblem);
    try {
      // Destructure email and password from userData
      const {
        problemNumber,
        problemName,
        describeProblem,
        outerInputProblem,
        innerInputProblem,
        inputCodeLength,
        outputProblem,
        date,
      } = createProblem;

      const dataToStore = {
        problemNumber,
        problemName,
        describeProblem,
        outerInputProblem,
        innerInputProblem,
        inputCodeLength,
        outputProblem,
        date,
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
    if (!checkStoredProblem) {
      getStudent();
    }
  }, [user]);
  useEffect(() => {
    setContestTime();
  }, [user]);

  if (countdownDate == null) {
    console.log("Probelem will be delete");
  }

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
    CreateProblemScore,
    getProblemScrore,
    timeTaken,
    setTimeTaken,
    problemStatus,
    setProblemStatus,
    handleFinishedContest,
    startTime,
    endTime,
    countdownDate,
    timeDuration,
    setTimeDuration,
  };

  // console.log(problemCollections);
  // console.log("Loaded student data", );
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
