// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDpUDUd34LYEeGbHWhkYC2pqVRLiAWdiK0",
    authDomain: "todo-ninjia-6fe70.firebaseapp.com",
    projectId: "todo-ninjia-6fe70",
    storageBucket: "todo-ninjia-6fe70.appspot.com",
    messagingSenderId: "618515457363",
    appId: "1:618515457363:web:051832311a785179b4ada6",
    measurementId: "G-S3BSB2YF6N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const analytics = getAnalytics(app);

// analytics.settings({timestampsInSnapshots:true})

export default {db}