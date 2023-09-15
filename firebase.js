// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCj5eTuaEpe583eXy3sjvrSe_y-hbvnnCU",
  authDomain: "medium-clone-e946b.firebaseapp.com",
  projectId: "medium-clone-e946b",
  storageBucket: "medium-clone-e946b.appspot.com",
  messagingSenderId: "836453659251",
  appId: "1:836453659251:web:3e8d7cbdce6b4b83c0f006",
  measurementId: "G-RX7HHJF7R7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
