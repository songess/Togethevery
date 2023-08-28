// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBq6ynnJkHLjvELWnss8er9s1H6nLsCP9s",
  authDomain: "togethevery.firebaseapp.com",
  databaseURL: "https://togethevery-default-rtdb.firebaseio.com",
  projectId: "togethevery",
  storageBucket: "togethevery.appspot.com",
  messagingSenderId: "962573599548",
  appId: "1:962573599548:web:cf7dc31f0abd7a63765439",
  measurementId: "G-D1TXBDY9FT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);