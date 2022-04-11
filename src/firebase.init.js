// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmAndQh996OTjEY72dywMKQrW3QAsub2A",
  authDomain: "ema-john-simple-aebef.firebaseapp.com",
  projectId: "ema-john-simple-aebef",
  storageBucket: "ema-john-simple-aebef.appspot.com",
  messagingSenderId: "770730989274",
  appId: "1:770730989274:web:4432f34dc81b9d355a77e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth