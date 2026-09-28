// ==========================================================================
// Firebase configuration
// PASTE YOUR EXACT CONFIG FROM THE FIREBASE CONSOLE BELOW.
// Project Settings → General → Your apps → Web app → SDK setup and configuration
// (These values are safe to be public — they are not secret keys.)
// ==========================================================================

const firebaseConfig = {
  apiKey: "AIzaSyDVoc0j9320DAkuEVSoLQLOZFb19_nLjrc",
  authDomain: "amandeep-store.firebaseapp.com",
  projectId: "amandeep-store",
  storageBucket: "amandeep-store.firebasestorage.app",
  messagingSenderId: "217946141595",
  appId: "1:217946141595:web:9254326efe7b9282c4e73e"
};

// The single email allowed to use the admin panel.
// Must match the account you create in Firebase Authentication → Users.
export const ADMIN_EMAIL = "amanwarwal888@gmail.com";

// ---- Firebase SDK (loaded from Google's CDN, modular v10) ----
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import {
  getAuth,
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import {
  getFirestore,
  collection,
  doc,
  addDoc,
  setDoc,
  updateDoc,
  deleteDoc,
  getDoc,
  getDocs,
  query,
  orderBy,
  where,
  onSnapshot,
  writeBatch,
  Bytes,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export {
  collection, doc, addDoc, setDoc, updateDoc, deleteDoc,
  getDoc, getDocs, query, orderBy, where, onSnapshot, writeBatch, Bytes, serverTimestamp,
  sendSignInLinkToEmail, isSignInWithEmailLink, signInWithEmailLink,
  signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut
};
