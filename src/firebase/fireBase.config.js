// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBODOv9i9XD7UsXRmqcr7mD30EXE2-lBWI",
  authDomain: "ema-jon-firebase-auth-d00dd.firebaseapp.com",
  projectId: "ema-jon-firebase-auth-d00dd",
  storageBucket: "ema-jon-firebase-auth-d00dd.appspot.com",
  messagingSenderId: "268043592903",
  appId: "1:268043592903:web:f667bb8d4b09589b828ae2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;