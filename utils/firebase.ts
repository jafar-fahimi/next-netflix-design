// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // to connect firebase db
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_APIKEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTHDOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  // databaseURL: "https://next-firebase-stripe-39bf8-default-rtdb.firebaseio.com",
  // measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
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
