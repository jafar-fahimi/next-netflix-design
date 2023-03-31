// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // to connect firebase db
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
// getApps()	A (read-only) array of all initialized apps.
// getApp() Retrieves a FirebaseApp instance.When called with no arguments, the default app is returned. When an app name is provided, the app corresponding to that name is returned.An exception is thrown if the app being retrieved has not yet been initialized.
const db = getFirestore(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(); // getAuth is to check whether we're authenticated or not

export default app;
export { auth, db };
