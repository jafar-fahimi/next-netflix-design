// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDL7DwvFaJbNu8NbWXtgGYvgQc-Vn95_ZI",
  authDomain: "netflix-clone-d50cc.firebaseapp.com",
  // databaseURL: "https://next-firebase-stripe-39bf8-default-rtdb.firebaseio.com",
  projectId: "netflix-clone-d50cc",
  storageBucket: "netflix-clone-d50cc.appspot.com",
  messagingSenderId: "547034182857",
  appId: "1:547034182857:web:1d08afcd57e3930fd10918",
};

// Initialize Firebase // always know why! orelse your memorizing!
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
console.log("getApps().length: ", getApps().length);
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
