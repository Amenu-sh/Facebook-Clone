import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getApp, getApps, initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyBVfhL9H9VJ_UbLZZ4awH7fgs-kbBG83uQ",
  authDomain: "fb-clone2-yt.firebaseapp.com",
  projectId: "fb-clone2-yt",
  storageBucket: "fb-clone2-yt.appspot.com",
  messagingSenderId: "589197860605",
  appId: "1:589197860605:web:99faaad3c5251bc89ce894",
};
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const storage = getStorage(app);

export default app;

//export {db, storage};
export { db, storage };
