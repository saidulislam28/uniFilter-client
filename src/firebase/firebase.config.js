
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDfjXSpcEpd82p2RRWapcpuEikyNoknkAM",
  authDomain: "unifilter-auth.firebaseapp.com",
  projectId: "unifilter-auth",
  storageBucket: "unifilter-auth.appspot.com",
  messagingSenderId: "375944546535",
  appId: "1:375944546535:web:a7eba9ec983b69e4127a42"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;