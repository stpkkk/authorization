import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
 
const firebaseConfig = {
  apiKey: "AIzaSyAh_T3-dcsgBCV_fE_0o3N5RWe3ONGmin8",
  authDomain: "auth-864f9.firebaseapp.com",
  projectId: "auth-864f9",
  storageBucket: "auth-864f9.appspot.com",
  messagingSenderId: "344662757026",
  appId: "1:344662757026:web:6623aa9b391e4e6a2f51fb"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);