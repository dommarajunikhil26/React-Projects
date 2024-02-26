import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { cityDb } from './temp/m-city-export';


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
const db = getFirestore(app);
const storage = getStorage(app);

// cityDb.matches.forEach(async (match) => {
//     try {
//         await addDoc(collection(db, 'matches'), match);
//     } catch (error) {
//         console.log(error);
//     }
// })


// cityDb.players.forEach(async (player) => {
//     try {
//         await addDoc(collection(db, 'players'), player);
//     } catch (error) {
//         console.log(error);
//     }
// })

// cityDb.positions.forEach(async (position) => {
//     try {
//         await addDoc(collection(db, 'positions'), position);
//     } catch (error) {
//         console.log(error);
//     }
// })

// cityDb.promotions.forEach(async (promotion) => {
//     try {
//         await addDoc(collection(db, 'promotions'), promotion);
//     } catch (error) {
//         console.log(error);
//     }
// })

// cityDb.teams.forEach(async (team) => {
//     try {
//         await addDoc(collection(db, 'teams'), team);
//     } catch (error) {
//         console.log(error);
//     }
// })


export{
    firebase, db, storage
}


