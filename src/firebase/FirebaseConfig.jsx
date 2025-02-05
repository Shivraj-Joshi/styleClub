// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// import authentication and firestore from firebase

import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2M140aqR4UGg2VO4XjUQuqkGi_vYkgLM",
  authDomain: "myfirstapp-7468f.firebaseapp.com",
  projectId: "myfirstapp-7468f",
  storageBucket: "myfirstapp-7468f.firebasestorage.app",
  messagingSenderId: "614392213747",
  appId: "1:614392213747:web:69593a17c78b4afa660786",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app); //store the firstore in fireDB
const auth = getAuth(app);

export { fireDB, auth };
