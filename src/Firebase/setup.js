
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBNNmHZml6u2UpSppMNcLu2b7JOpWbUo_M",
  authDomain: "stylesphere-941c1.firebaseapp.com",
  projectId: "stylesphere-941c1",
  storageBucket: "stylesphere-941c1.appspot.com",
  messagingSenderId: "309196864048",
  appId: "1:309196864048:web:5583bd5cbf062eb0374bf5"
};


const app = initializeApp(firebaseConfig);
export const auth =getAuth()