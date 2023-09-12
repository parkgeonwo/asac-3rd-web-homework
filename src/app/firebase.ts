// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKunphNN5p8KqNqSeJAQjAmpily02eWU4",
  authDomain: "asac-3-nextjs.firebaseapp.com",
  projectId: "asac-3-nextjs",
  storageBucket: "asac-3-nextjs.appspot.com",
  messagingSenderId: "291350748303",
  appId: "1:291350748303:web:616a69aaa55098c4d224fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firestore = firebaseApp.firestore(); // db, firestore

export {db, firestore};

