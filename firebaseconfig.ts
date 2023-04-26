// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFbv8BmvtwAhVpKluFgJ-dJrfeqqrLO7M",
  authDomain: "black-list-6f99c.firebaseapp.com",
  projectId: "black-list-6f99c",
  storageBucket: "black-list-6f99c.appspot.com",
  messagingSenderId: "584355112579",
  appId: "1:584355112579:web:6a5f467dcf138ccb1e9db6",
  measurementId: "G-DXRVN6SJ8H"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);