import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqzRggrK9ZnEL2dqOraWKm1JBFz-I_mh8",
  authDomain: "el-mundo-de-tulia.firebaseapp.com",
  projectId: "el-mundo-de-tulia",
  storageBucket: "el-mundo-de-tulia.appspot.com",
  messagingSenderId: "967644401874",
  appId: "1:967644401874:web:df5de9f4a5c447030d5d0b",
  measurementId: "G-EDY3H48SQM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
