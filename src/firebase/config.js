import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBErEEATjLGU16N80CJEsvpIPCyUawlrME",
  authDomain: "pinkfloydrj-3c271.firebaseapp.com",
  projectId: "pinkfloydrj-3c271",
  storageBucket: "pinkfloydrj-3c271.appspot.com",
  messagingSenderId: "17232313811",
  appId: "1:17232313811:web:2291d495d34a6832328326",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)