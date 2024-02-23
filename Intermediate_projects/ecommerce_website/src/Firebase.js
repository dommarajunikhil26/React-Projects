// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQsZ4dbKPLaEpEk41FgIUJsEL013ZUMpI",
  authDomain: "ecommercelogin-2041e.firebaseapp.com",
  projectId: "ecommercelogin-2041e",
  storageBucket: "ecommercelogin-2041e.appspot.com",
  messagingSenderId: "1015254888050",
  appId: "1:1015254888050:web:31485f43dfc63928e49ceb",
  measurementId: "G-GPPZD475NF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;