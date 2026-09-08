import { initializeApp } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js";

import {
    getAuth,
    GoogleAuthProvider
} from "https://www.gstatic.com/firebasejs/12.18.0/firebase-auth.js";

import {
    getFirestore
} from "https://www.gstatic.com/firebasejs/12.18.0/firebase-firestore.js";


const firebaseConfig = {

    apiKey: "AIzaSyCfvrAS3bkuKNSmjl0wh9MEFVRZXC5k2_0",

    authDomain: "studentnotes-5f3bd.firebaseapp.com",

    projectId: "studentnotes-5f3bd",

    storageBucket: "studentnotes-5f3bd.firebasestorage.app",

    messagingSenderId: "78614344459",

    appId: "1:78614344459:web:172db6657973620bf3680e",

    measurementId: "G-WNGC1N59ZC"

};


const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);

export const db = getFirestore(app);

export const googleProvider = new GoogleAuthProvider();
