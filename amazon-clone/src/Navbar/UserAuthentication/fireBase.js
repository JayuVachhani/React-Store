// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDM9sI0VMcCRhFlQAmyQcMm5ygi3d1OiLw",
  authDomain: "clone-95b2d.firebaseapp.com",
  projectId: "clone-95b2d",
  storageBucket: "clone-95b2d.appspot.com",
  messagingSenderId: "240932514855",
  appId: "1:240932514855:web:d07a4837dd99b71d863202"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth();


