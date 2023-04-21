
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAkidZ-YCon2P2S2aBq6A1A366XxMP_WMI",
  authDomain: "todolist-ff6c7.firebaseapp.com",
  databaseURL: "https://todolist-ff6c7-default-rtdb.firebaseio.com",
  projectId: "todolist-ff6c7",
  storageBucket: "todolist-ff6c7.appspot.com",
  messagingSenderId: "190877110217",
  appId: "1:190877110217:web:1abadc65aa0928820da218",
  measurementId: "G-L2QE2GRKV1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);