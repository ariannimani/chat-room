import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDmM0hjds9lQhiOjolgYp721XkeVgWcaFs",

  authDomain: "chat-room-c62c6.firebaseapp.com",

  projectId: "chat-room-c62c6",

  storageBucket: "chat-room-c62c6.appspot.com",

  messagingSenderId: "169157533550",

  appId: "1:169157533550:web:fbef4bd41a218fe5b06b7f",

  measurementId: "G-MV1RLV1SZT",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };
export default db;
