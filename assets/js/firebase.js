// assets/js/firebase.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
  getFirestore
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

/* FIREBASE CONFIG */
const firebaseConfig = {
  apiKey: "AIzaSyCXxgO0OU9k-LvRhYY7bIuhvVpY5XgMWdk",
  authDomain: "nuralam-90162.firebaseapp.com",
  databaseURL: "https://nuralam-90162-default-rtdb.firebaseio.com",
  projectId: "nuralam-90162",
  storageBucket: "nuralam-90162.firebasestorage.app",
  messagingSenderId: "371833786531",
  appId: "1:371833786531:web:fc49153e527ac617612f16",
  measurementId: "G-T16MWNKY0V"
};

/* INIT */
const app = initializeApp(firebaseConfig);

/* AUTH */
const auth = getAuth(app);

/* FIRESTORE */
const db = getFirestore(app);

/* EXPORT */
export { app, auth, db };

/* OPTIONAL GLOBAL */
window.firebaseAuth = auth;
window.firebaseSignIn = signInWithEmailAndPassword;
window.firebaseOnAuthStateChanged = onAuthStateChanged;
window.firebaseSignOut = signOut;
