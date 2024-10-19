import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
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
  deleteDoc,
} from "firebase/firestore";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import "react-toastify/dist/ReactToastify.css";
import { stringify } from "postcss";
export const AuthContext = createContext(null);

////Main Project

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
  const [allScores, setAllScores] = useState([]);
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

      setStartTime(new Date(problemsTime[0]?.starTime));
      setEndTime(new Date(problemsTime[0]?.endTime));
      setTimeDuration(parseInt(problemsTime[0]?.timeDuration));
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

  const resetTimer = async () => {
    const collectionRef = collection(db, "contestTimeSet");
    const querySnapshot = await getDocs(collectionRef);

    if (querySnapshot.empty) {
      console.log("Collection is already empty.");
      return;
    }

    // Delete each document in the collection
    querySnapshot.forEach(async (documentSnapshot) => {
      try {
        await deleteDoc(doc(db, "contestTimeSet", documentSnapshot.id));
        Swal.fire({
          title: "Great!",
          text: "Contest timer reset successfully",
          icon: "success",
        });
      } catch (error) {
        console.error("Error deleting document: ", error);
      }
    });

    console.log(`All documents in the  collection have been deleted.`);
  };
  ///////////ENd score and timer /////////////////////////

  const handleFinishedContest = async () => {
    console.log("Finished contest");
    let firstscores = parseFloat(localStorage.getItem("firstscores"));
    let secondscores = parseFloat(localStorage.getItem("secondscores"));
    let thirdscores = parseFloat(localStorage.getItem("thirdscores"));

    if (localStorage.getItem("firstscores") === null) firstscores = 0;

    if (localStorage.getItem("secondscores") === null) secondscores = 0;

    if (localStorage.getItem("thirdscores") === null) thirdscores = 0;

    // console.log(firstscores, secondscores, thirdscores);

    let averageScore = (firstscores + secondscores + thirdscores) / 3;
    // console.log(avergerScore);
    averageScore = averageScore.toFixed(3);
    const scoreInfo = {
      name: profileData.name,
      email: profileData.email,
      averageScore: averageScore,
      faculty: profileData.faculty,
    };
    // const docRef = await addDoc(collection(db, "participantInfo"), {
    //   scoreInfo,
    // });
    const docRef = doc(
      collection(db, "participantInfo"),
      JSON.stringify(averageScore)
    );
    await setDoc(docRef, { data: scoreInfo });

    Swal.fire({
      title: "Great!",
      text: "Your problems submited successfully",
      icon: "success",
    });
    localStorage.removeItem("input");
    localStorage.removeItem("language_Id");
    localStorage.removeItem("firstscores");
    localStorage.removeItem("secondscores");
    localStorage.removeItem("thirdscores");
  };

  // console.log(localStorage.getItem("firstscores"));

  //// Start Leadboard section
  const getLeaderboardScore = async () => {
    try {
      // Reference to the 'problems' collection
      const participantInfos = collection(db, "participantInfo");

      // Get all documents in the 'problems' collection
      const querySnapshot = await getDocs(participantInfos);

      // Iterate over each document in the collection
      const scores = querySnapshot.docs.map((doc) => ({
        id: doc.id, // Document ID
        ...doc.data(), // Document data
      }));
      // Log all problems data
      // console.log("", scores);
      // cons
      setAllScores(scores);
      return scores; // Return problems array if needed
    } catch (error) {
      console.log("Error fetching products:", error);
    }
  };

  /////////////////////////

  //////Hanlde Score create///////

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
    const outputProblemIn = parseInt(
      outputProblem[outputProblem.indexOf(result)]
    );
    const resultIn = parseInt(result);

    // console.log(
    //   "resultString:",
    //   outputProblem[outputProblem.indexOf(result)] === result
    // );
    // console.log(
    //   "resultInt:",
    // ===
    //     parseInt(result)
    // );

    console.log(codeLength, inputCodeLengthInt, outputProblem, resultIn);

    if (codeLength > inputCodeLengthInt && outputProblemIn === resultIn) {
      if (problemNumber === 1) {
        let firstscores = 100 * (1 - (timeDuration - timeTaken) / timeDuration);

        if (firstscores === 0 || firstscores === null) {
          firstscores = 0;
        }

        localStorage.setItem("firstscores", firstscores);
        // console.log(firstscores);
        Swal.fire({
          title: "Good job!",
          text: "Your first problem algorithm accepted",
          icon: "success",
        });
      } else if (problemNumber === 2) {
        let secondscores =
          200 * (1 - (timeDuration - timeTaken) / timeDuration);

        if (secondscores === 0 || secondscores === null) {
          secondscores = 0;
        }
        localStorage.setItem("secondscores", secondscores);
        // // JSON.stringify({ "secondscores", secondscores})
        // console.log(secondscores);
        Swal.fire({
          title: "Good job!",
          text: "Your second problem algorithm accepted",
          icon: "success",
        });
      } else if (problemNumber === 3) {
        let thirdscores = 300 * (1 - (timeDuration - timeTaken) / timeDuration);

        if (thirdscores === 0 || thirdscores === null) {
          thirdscores = 0;
        }
        localStorage.setItem("thirdscores", thirdscores);
        Swal.fire({
          title: "Good job!",
          text: "Your third problem algorithm accepted",
          icon: "success",
        });
        if (localStorage.getItem("thirdscores")) setPassed(true);
      }
      //  else if (problemNumber === 4) {
      //   let forthscores = 400 * (1 - (timeDuration - timeTaken) / timeDuration);

      //   if (forthscores === 0 || forthscores === null) {
      //     forthscores = 0;
      //   }
      //   localStorage.setItem("forthscores", forthscores);
      //   Swal.fire({
      //     title: "Good job!",
      //     text: "Your forth Probelem score added",
      //     icon: "success",
      //   });
      //   if (localStorage.getItem("forthscores")) setPassed(true);
      // }
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Your problem's algorithm not accepted ",
      });
    }
  };

  ////Start Probelem section>>>>>>>

  const handleCreateProblem = async () => {
    setLoading(true);
    try {
      // Destructure email and password from userData
      const {
        problemNumber,
        problemName,
        describeProblem,
        inputProblem,
        inputCodeLength,
        outputProblem,
        explanation,
      } = createProblem;

      const dataToStore = {
        problemNumber,
        problemName,
        describeProblem,
        inputProblem,
        inputCodeLength,
        outputProblem,
        explanation,
      };
      const docRef = doc(collection(db, "problemsData"), problemNumber);
      await setDoc(docRef, { data: dataToStore });
      setCheckStoredProblem(true);
      Swal.fire({
        title: "Great!",
        text: "Probelem added successfully",
        icon: "success",
      });
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
          // console.log("No user data found for this UID.");
        }
      } catch (error) {
        console.log("Error fetching user data:", error);
      }
    } else {
    }
  };

  const addStudent = (userData) => {
    setLoading(true);
    console.log("Data inside API", userData);
    try {
      // Destructure email and password from userData
      const { uid, name, faculty, year, ukhemail } = userData;
      const dataToStore = {
        uid,
        name,
        faculty,
        year,
        ukhemail,
      };
      console.log("Data Stored", dataToStore);
      // Store data in Firestore
      // await setDoc(doc(db, "usersData", name), dataToStore);
      setDoc(doc(db, "usersData", uid), {
        dataToStore,
      });
      Swal.fire({
        title: "Great!",
        text: "Your form filled up successfully",
        icon: "success",
      });
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

  const resetPassword = (email) => {
    console.log(email);
    return sendPasswordResetEmail(auth, email);
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
      getLeaderboardScore();
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

  const userInfo = {
    user,
    setUser,
    loading,
    setLoading,
    signInUser,
    loginUserPop,
    logoutUser,
    createUser,
    resetPassword,
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
    resetTimer,
    allScores,
  };
  // console.log(user);
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
