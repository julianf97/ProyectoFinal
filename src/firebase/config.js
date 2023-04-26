// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHpdNOaKflGB0BACbpX0GUPuO5H85uWKE",
  authDomain: "spacegames-f157d.firebaseapp.com",
  projectId: "spacegames-f157d",
  storageBucket: "spacegames-f157d.appspot.com",
  messagingSenderId: "119935050807",
  appId: "1:119935050807:web:51f44dacf65f7ed88d8bb2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)