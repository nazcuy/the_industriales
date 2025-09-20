import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY || "clave-temporal-por-seguridad",
  authDomain: "the-industriales.firebaseapp.com",
  projectId: "the-industriales",
  storageBucket: "the-industriales.firebasestorage.app",
  messagingSenderId: "579237694162",
  appId: "1:579237694162:web:8c78a9e2e17302f45abb0b"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;