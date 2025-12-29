// importing firebase app and firestore database

import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword

} from "firebase/auth";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc

} from "firebase/firestore";



//firebase configurations

const firebaseConfig = {
  apiKey: "AIzaSyBfw7sRIBFJfeyvJqCuJTmETdfWCH3GEJo",
  authDomain: "xstore-4ca24.firebaseapp.com",
  projectId: "xstore-4ca24",
  storageBucket: "xstore-4ca24.firebasestorage.app",
  messagingSenderId: "644828695092",
  appId: "1:644828695092:web:8a362b2ad1809124af5861"
};

//created instence of the app
const firebaseApp = initializeApp(firebaseConfig);
// googleProvider of the login method
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account"
})


export const auth = getAuth();
export const db = getFirestore();
// Authenticate user with google
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

//Enter/Fetch User from database. 
export const createUserDocumentFromAuth = async (userAuth) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      })
    } catch (error) {
      console.log("Failed to Enter/Fetch User from database", error.message);
    }
  }
  return userDocRef;
}
//Authenticate user with email and password
export const createAuthUserWithEmailAndPassword = async (email, password) => {

  if (!email || !password) return;
  try {
    return await createUserWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.log("Failed to Authenticate user with email and password.", err);
  }
}

//Log in user with email and password
export const authUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  try {
    return await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.log("Error loging in with email", err);
    return err;
  }
}