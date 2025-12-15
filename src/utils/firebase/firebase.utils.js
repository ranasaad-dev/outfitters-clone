// importing firebase app and firestore database

import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider
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
// provider of the login method
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
})

export const auth = getAuth();
export const db = getFirestore();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

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
      console.log("Error creating the user ", error.message);
    }
  }

  return userDocRef;

}