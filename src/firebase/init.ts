// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBl_LtihIRUoC-u5lnH-oAWTDpiOcJBxgg",
  authDomain: "version-manager-a87e0.firebaseapp.com",
  projectId: "version-manager-a87e0",
  storageBucket: "version-manager-a87e0.appspot.com",
  messagingSenderId: "743101397183",
  appId: "1:743101397183:web:6a151c5ab48d33ef01ae0a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//init firestore service
const db = getFirestore();
export default db;