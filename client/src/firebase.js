// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "moviemaven.firebaseapp.com",
  projectId: "moviemaven",
  storageBucket: "moviemaven.appspot.com",
  messagingSenderId: "756841501530",
  appId: "1:756841501530:web:f5d36dfcc167aed31d5963",
  measurementId: "G-ZFZJQMJHST"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);