import firebase from "firebase/compat";
import 'firebase/compat/firestore';
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to us
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const environment = {
production: false,
    firebaseConfig: {
        apiKey: "AIzaSyDFIj3hS8pEOEikQ2uvlEcuIeNGC8u9tZY",
        authDomain: "gamefinder-9d64b.firebaseapp.com",
        databaseURL: "https://gamefinder-9d64b-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "gamefinder-9d64b",
        storageBucket: "gamefinder-9d64b.appspot.com",
        messagingSenderId: "1022854895272",
        appId: "1:1022854895272:web:8a4435af6814baffaa549d",
        measurementId: "G-J09NCS920Q"
    }
}


