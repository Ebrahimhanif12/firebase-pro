// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqIzuREs55ZS8VBswnUt-rSMoArsuxlwY",
  authDomain: "fir-pro-abff8.firebaseapp.com",
  projectId: "fir-pro-abff8",
  storageBucket: "fir-pro-abff8.appspot.com",
  messagingSenderId: "381285840782",
  appId: "1:381285840782:web:39996601bc2620f4e6d6df",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
