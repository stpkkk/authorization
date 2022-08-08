import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAfQ-BPHyheSorGj71V8Gcji-bPVrnJJrk",
  authDomain: "auth-development-a5b83.firebaseapp.com",
  projectId: "auth-development-a5b83",
  storageBucket: "auth-development-a5b83.appspot.com",
  messagingSenderId: "773071832245",
  appId: "1:773071832245:web:d5f79354622017ad65eafc",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

