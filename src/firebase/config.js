// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLcgRnyBeU-hCJpycxoMraoBQAvwuyxNo",
  authDomain: "hotel-extrados.firebaseapp.com",
  projectId: "hotel-extrados",
  storageBucket: "hotel-extrados.appspot.com",
  messagingSenderId: "194490486610",
  appId: "1:194490486610:web:1d2904c65939e8d9d5348b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);