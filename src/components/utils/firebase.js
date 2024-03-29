// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA56ZUW_jKO-2a6hf7UIoUL8W0RF3NtbJE",
  authDomain: "netflix-gpt-a5578.firebaseapp.com",
  projectId: "netflix-gpt-a5578",
  storageBucket: "netflix-gpt-a5578.appspot.com",
  messagingSenderId: "448741791097",
  appId: "1:448741791097:web:6d41f7d1e4430e50724ba8",
  measurementId: "G-MFFTYNSCH1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();