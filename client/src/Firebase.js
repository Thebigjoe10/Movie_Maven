// firebase.js

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtv1Cb_ONYbDjqRSE1NVc-2ZKH77z0sAE",
  authDomain: "filmx-project.firebaseapp.com",
  projectId: "filmx-project",
  storageBucket: "filmx-project.appspot.com",
  messagingSenderId: "418879153055",
  appId: "1:418879153055:web:d8b67ccf642e8e376153aa",
  measurementId: "G-MC5NB4JGY2"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const storage = firebase.storage();

// Export the initialized Firebase app, Firestore, and storage
export { firebaseApp, db, storage };
