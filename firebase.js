// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCff0fN2FJGhYVIjlGEvGGJ18r1mxug5JM",
  authDomain: "insta-clone-ee0b3.firebaseapp.com",
  projectId: "insta-clone-ee0b3",
  storageBucket: "insta-clone-ee0b3.appspot.com",
  messagingSenderId: "711334118595",
  appId: "1:711334118595:web:e1f8bee160ff79ad24ce76",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
