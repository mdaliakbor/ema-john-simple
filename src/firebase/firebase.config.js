// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBHm9HvjDRxRYfpUIkNA2mi6kbF9W6qSjI",
    authDomain: "simple-ecom-3409c.firebaseapp.com",
    projectId: "simple-ecom-3409c",
    storageBucket: "simple-ecom-3409c.appspot.com",
    messagingSenderId: "149770114666",
    appId: "1:149770114666:web:0ef90594f483f345345c13"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;