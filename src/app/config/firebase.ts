// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'revents-7c80f.firebaseapp.com',
  projectId: 'revents-7c80f',
  storageBucket: 'revents-7c80f.appspot.com',
  messagingSenderId: '245990326622',
  appId: '1:245990326622:web:a222d70f315b4add4b4fcf',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
