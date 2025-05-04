// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPhWi4sQmRhXOoqy7ERrioN5oiG7gqbKw",
  authDomain: "logindj-d364e.firebaseapp.com",
  projectId: "logindj-d364e",
  storageBucket: "logindj-d364e.firebasestorage.app",
  messagingSenderId: "1010838784442",
  appId: "1:1010838784442:web:5574741a5bea112c1df583"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
//export default app;