import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBtqdgtj9dfSC7wNwME0mt7U-N8_vV3CRs",
  authDomain: "maranatha-ceea2.firebaseapp.com",
  projectId: "maranatha-ceea2",
  storageBucket: "maranatha-ceea2.firebasestorage.app",
  messagingSenderId: "609634718027",
  appId: "1:609634718027:web:9de24d9edf3d22da0398ce",
  measurementId: "G-DTGG295SD5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { app, analytics, db, storage, auth };
