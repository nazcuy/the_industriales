import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDgP_DUBV-4v_Vo4YJrHRjqFkv-8vKA26k",
  authDomain: "the-industriales.firebaseapp.com",
  projectId: "the-industriales",
  storageBucket: "the-industriales.firebasestorage.app",
  messagingSenderId: "579237694162",
  appId: "1:579237694162:web:8c78a9e2e17302f45abb0b"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;