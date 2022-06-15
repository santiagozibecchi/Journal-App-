// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
     apiKey: "AIzaSyDw5YJQml6OS4LJxpRUbjbwDftlXxUppCc",
     authDomain: "reactjournalfirebase.firebaseapp.com",
     projectId: "reactjournalfirebase",
     storageBucket: "reactjournalfirebase.appspot.com",
     messagingSenderId: "955450716531",
     appId: "1:955450716531:web:5faef80cabbc8ebe96d506"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FireBaseAuth = getAuth(FirebaseApp);
export const FireBaseDB = getFirestore(FirebaseApp);