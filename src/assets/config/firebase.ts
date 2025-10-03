// Import the functions you need from the SDKs you need
import { initializeApp, type FirebaseApp } from "firebase/app";
import { getAuth, type Auth } from "firebase/auth";
import { Firestore, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDr52iJf4w-_mlVZIBTgMOl2d_mt1xh5cc",
  authDomain: "fir-blog-c60d6.firebaseapp.com",
  projectId: "fir-blog-c60d6",
  storageBucket: "fir-blog-c60d6.firebasestorage.app",
  messagingSenderId: "849432339719",
  appId: "1:849432339719:web:cae4596d066536a79b11a2",
  measurementId: "G-66F14GP2WK",
};

// Initialize Firebase
const app: FirebaseApp = initializeApp(firebaseConfig);
export const auth: Auth = getAuth(app);
export const db: Firestore = getFirestore(app);

// Sign in to google
// firebase login

// Initiate your project
// firebase init

// When you're ready, deploy your web app
// Put your static files (e.g., HTML, CSS, JS) in your app's deploy directory (the default is "public")
// firebase deploy
