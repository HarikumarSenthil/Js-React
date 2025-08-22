import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyB5mX8rknmimSxuqTfr8y5LW00QX1QNMTk",
  authDomain: "notenest-1a914.firebaseapp.com",
  projectId: "notenest-1a914",
  storageBucket: "notenest-1a914.firebasestorage.app",
  messagingSenderId: "979015366447",
  appId: "1:979015366447:web:30c532d1e90cfd589513da",
  measurementId: "G-VY7RNFZZLG"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app)


export {db};
