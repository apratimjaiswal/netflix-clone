import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChJ3XqDrj0IhVn5ZA8vU9HinpBoLmswdQ",
  authDomain: "netflix-clone-ba17e.firebaseapp.com",
  projectId: "netflix-clone-ba17e",
  storageBucket: "netflix-clone-ba17e.appspot.com",
  messagingSenderId: "259952864809",
  appId: "1:259952864809:web:314dbf5ebecb062c7c3638",
  measurementId: "G-9KYNWHQ6DV",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
