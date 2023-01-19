import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyDFkqctdFaG4shCVozi9Tzy22swp9a0nT8",
  authDomain: "car-rental-2e9f0.firebaseapp.com",
  projectId: "car-rental-2e9f0",
  storageBucket: "car-rental-2e9f0.appspot.com",
  messagingSenderId: "576807769818",
  appId: "1:576807769818:web:b9e852649a1e49d149f7e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)


export default app;