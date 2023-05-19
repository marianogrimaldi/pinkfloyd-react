// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBErEEATjLGU16N80CJEsvpIPCyUawlrME",
  authDomain: "pinkfloydrj-3c271.firebaseapp.com",
  projectId: "pinkfloydrj-3c271",
  storageBucket: "pinkfloydrj-3c271.appspot.com",
  messagingSenderId: "17232313811",
  appId: "1:17232313811:web:2291d495d34a6832328326",
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)