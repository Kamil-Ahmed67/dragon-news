// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWO_jdvDTp7rwfqZugAAsKwtXPJ_tGKEk",
  authDomain: "dragon-news-c5440.firebaseapp.com",
  projectId: "dragon-news-c5440",
  storageBucket: "dragon-news-c5440.firebasestorage.app",
  messagingSenderId: "471981467165",
  appId: "1:471981467165:web:5c6cbabc6334de0c30c8f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;