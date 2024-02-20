import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object

const firebaseConfig = {
    apiKey: "AIzaSyDKXSAmWslcBcl5U-hsiLf4Zvb5TbUw6NU",
    authDomain: "city-e88ad.firebaseapp.com",
    projectId: "city-e88ad",
    storageBucket: "city-e88ad.appspot.com",
    messagingSenderId: "240462126263",
    appId: "1:240462126263:web:08a0b5e916c59853b20132",
    measurementId: "G-NTL9R003LG"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firebase = getAuth(app);

export{
    firebase
}


