import { initializeApp } from "firebase/app";


// import authentication functionality from firebase
import {
  Auth,
  getAuth,
  EmailAuthProvider,
  signOut,
  onAuthStateChanged,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
} from 'firebase/auth';

// import database functionality from firebase
import {
  getFirestore,
  addDoc,
  collection,
  query,
  orderBy,
  onSnapshot,
  doc,
  setDoc,
  where,
} from 'firebase/firestore';

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDSssYVyEoIHK5vmJEBzAe_tV0XVWOItsI",
  authDomain: "events-dvdv.firebaseapp.com",
  projectId: "events-dvdv",
  storageBucket: "events-dvdv.appspot.com",
  messagingSenderId: "29935066840",
  appId: "1:29935066840:web:75d9ad467f648febe5c1ad"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Login using email and password
const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

// Register user with email and password
const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

// Send password reset link to an email address
const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent to the email provided");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
}

// Logout
const logout = () => {
  signOut(auth);
};