import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

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

//export default app;
export const db = getFirestore(app);