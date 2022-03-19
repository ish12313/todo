import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAxw9b-QJ4z7yNkTxJeL8Gd-CVuPdnIguY",
  authDomain: "todo-abcd.firebaseapp.com",
  projectId: "todo-abcd",
  storageBucket: "todo-abcd.appspot.com",
  messagingSenderId: "803083291087",
  appId: "1:803083291087:web:cd19cb9cdf2f8f4f45eaba",
  measurementId: "G-1PR32C1VVM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore();

export { app, analytics, db };
