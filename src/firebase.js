import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBT4f350rG7I0hmbD3I8brW61ZXTIJImAE",
  authDomain: "infrarouge-7597d.firebaseapp.com",
  projectId: "infrarouge-7597d",
  storageBucket: "infrarouge-7597d.firebasestorage.app",
  messagingSenderId: "285082507797",
  appId: "1:285082507797:web:c68f9b892b6a6324f90c1c",
  measurementId: "G-GF69TFWYN4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export services
export const db = getFirestore(app);
export const auth = getAuth(app);
export default app;
