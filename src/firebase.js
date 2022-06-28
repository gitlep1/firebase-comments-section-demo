import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBk0WxCPGnDaDLgt30RvAuIboXAyOxLPb8",
  authDomain: "clone-d2fac.firebaseapp.com",
  projectId: "clone-d2fac",
  storageBucket: "clone-d2fac.appspot.com",
  messagingSenderId: "797474730271",
  appId: "1:797474730271:web:bf58e314f0b36be7ab402a",
  measurementId: "G-559PR9MQGV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export default app;
