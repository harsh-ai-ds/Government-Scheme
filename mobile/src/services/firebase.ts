import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCW40A-SEvqtosk-ETyaJiw-yxlebadFIk",
  authDomain: "government-schemes-6d85a.firebaseapp.com",
  projectId: "government-schemes-6d85a",
  storageBucket: "government-schemes-6d85a.firebasestorage.app",
  messagingSenderId: "478419683791",
  appId: "1:478419683791:android:b824bda4b5792ab7616aba",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;