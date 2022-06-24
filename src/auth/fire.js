// Import the functions you need from the SDKs you need
//import firebase from 'firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfuMjYlR8RisiSKErG7dgUIyMD77mxax4",
  authDomain: "login-77f7b.firebaseapp.com",
  projectId: "login-77f7b",
  storageBucket: "login-77f7b.appspot.com",
  messagingSenderId: "770252499712",
  appId: "1:770252499712:web:3001feed0cf76f27dba1e5"
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;   