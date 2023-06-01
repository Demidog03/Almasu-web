import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getDatabase} from "firebase/database"
import {getStorage} from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyBvBCj4jyrHdz6vBnRgTx-BYhD9-OQFvC4",
    authDomain: "almasu-98c4b.firebaseapp.com",
    databaseURL: "https://almasu-98c4b-default-rtdb.firebaseio.com",
    projectId: "almasu-98c4b",
    storageBucket: "almasu-98c4b.appspot.com",
    messagingSenderId: "348904395718",
    appId: "1:348904395718:web:640ab0950cca5ff3e718c7",
    measurementId: "G-B3ZP0CRW7F"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getDatabase(app);
export const st = getStorage(app);

export default app;
