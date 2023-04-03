import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAVDCHilBkCQx2WG0ZujVktUriZTHijotA",
  authDomain: "ecommerce-8a63a.firebaseapp.com",
  projectId: "ecommerce-8a63a",
  storageBucket: "ecommerce-8a63a.appspot.com",
  messagingSenderId: "316580452424",
  appId: "1:316580452424:web:b3d75529b5a5b74091a07d"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
