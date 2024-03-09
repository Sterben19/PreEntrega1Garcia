import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDqzRggrK9ZnEL2dqOraWKm1JBFz-I_mh8",
    authDomain: "el-mundo-de-tulia.firebaseapp.com",
    projectId: "el-mundo-de-tulia",
    storageBucket: "el-mundo-de-tulia.appspot.com",
    messagingSenderId: "967644401874",
    appId: "1:967644401874:web:df5de9f4a5c447030d5d0b",
    measurementId: "G-EDY3H48SQM"
}

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
