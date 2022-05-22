import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBu4V9kAIdTKcjvKYqKkDzYt8BOUgDOjVQ",
  authDomain: "leasingoo.firebaseapp.com",
  projectId: "leasingoo",
  storageBucket: "leasingoo.appspot.com",
  messagingSenderId: "658592661455",
  appId: "1:658592661455:web:3c71e6ae61d1e6c44edcba",
  measurementId: "G-YEF25V7VN8",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
