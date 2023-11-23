// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKgKj2SXtScTXR10fWEY1cR31SeyNVSkc",
  authDomain: "vincent-le.firebaseapp.com",
  projectId: "vincent-le",
  storageBucket: "vincent-le.appspot.com",
  messagingSenderId: "662893968840",
  appId: "1:662893968840:web:e62339e35e0fc8796c54fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {
    db,
    app
}