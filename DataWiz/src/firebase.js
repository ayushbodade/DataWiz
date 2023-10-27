import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDsm6EJ37QnHxE9MotmQZuh0Vp6h7HfZ1I",
    authDomain: "datawiz-4ad5d.firebaseapp.com",
    projectId: "datawiz-4ad5d",
    storageBucket: "datawiz-4ad5d.appspot.com",
    messagingSenderId: "141508041819",
    appId: "1:141508041819:web:e131a1b77e028ec493737e"
  };

  const app = initializeApp(firebaseConfig);

  const auth = getAuth(app);
  const provider = new GoogleAuthProvider(app);
  const storage = getStorage(app);
  const db = getFirestore(app)

  export { auth, provider, storage, db } 