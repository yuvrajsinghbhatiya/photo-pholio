import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzhy5PGeXWvfY4fFFQNx3_Z3VMMjFGWoQ",
  authDomain: "photo-pholio.firebaseapp.com",
  projectId: "photo-pholio",
  storageBucket: "photo-pholio.appspot.com",
  messagingSenderId: "80491728439",
  appId: "1:80491728439:web:908fd99650f891624f79b2",
  measurementId: "G-3K3991MGHC"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const firestore = firebase.firestore();
