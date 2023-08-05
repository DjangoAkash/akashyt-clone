// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getAuth,GoogleAuthProvider} from "firebase/auth"
import {getFirestore,serverTimestamp} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUKOLTIRFcldVC_e4at-HLfnyKjUudvoM",
  authDomain: "yt-clone-c9f28.firebaseapp.com",
  projectId: "yt-clone-c9f28",
  storageBucket: "yt-clone-c9f28.appspot.com",
  messagingSenderId: "399162859526",
  appId: "1:399162859526:web:baeb305c7ac18d935de387"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();
const timestamp = serverTimestamp();

export { app, db, auth, timestamp, provider };
