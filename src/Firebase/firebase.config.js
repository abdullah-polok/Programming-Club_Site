import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import firebase from "firebase/compat/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyA-0F9ZCA4PPU_sT0oR0kkYaL-Euty3fSk",
  authDomain: "ukh-programming-club.firebaseapp.com",
  projectId: "ukh-programming-club",
  storageBucket: "ukh-programming-club.appspot.com",
  messagingSenderId: "12506550887",
  appId: "1:12506550887:web:6b3c8ad19f6d251704bac2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);
export { firebase, db };
