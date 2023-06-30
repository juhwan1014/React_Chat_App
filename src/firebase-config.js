// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from '@firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmfHwLT5cEoXrz5GLdy23eI81KOdriEoM",
  authDomain: "react-chat-app-62c4a.firebaseapp.com",
  projectId: "react-chat-app-62c4a",
  storageBucket: "react-chat-app-62c4a.appspot.com",
  messagingSenderId: "900277519100",
  appId: "1:900277519100:web:6cbfffa9a8d1d8ae624d79"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
