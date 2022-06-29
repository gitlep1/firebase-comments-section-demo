// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbQtCRcfIMCPdzRyU2xGn4scOBnDff3yA",
  authDomain: "fir-testing-4f118.firebaseapp.com",
  projectId: "fir-testing-4f118",
  storageBucket: "fir-testing-4f118.appspot.com",
  messagingSenderId: "404062138892",
  appId: "1:404062138892:web:4aa451dcc50586f0d0b429",
  measurementId: "G-SWSM2B2E8Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
