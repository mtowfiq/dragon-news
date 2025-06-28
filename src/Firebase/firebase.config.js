// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACXMSvgaLWQbF7kqPlG5jeDiuZ336KmU8",
  authDomain: "dragon-143da.firebaseapp.com",
  projectId: "dragon-143da",
  storageBucket: "dragon-143da.firebasestorage.app",
  messagingSenderId: "391545795798",
  appId: "1:391545795798:web:469b78b535d49aeb9c0577"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



export default app