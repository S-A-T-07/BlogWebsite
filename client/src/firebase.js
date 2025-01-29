// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY, // Corrected syntax for Vite
  authDomain: "mern-blog-a29b0.firebaseapp.com",
  projectId: "mern-blog-a29b0",
  storageBucket: "mern-blog-a29b0.firebasestorage.app",
  messagingSenderId: "657247560190",
  appId: "1:657247560190:web:e5a02a12536ba80c8ae0af",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
