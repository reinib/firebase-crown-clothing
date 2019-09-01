import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBDMgWtOGKF117MY9yhOrBcNY1xawl9UH8",
  authDomain: "crwn-db-89b70.firebaseapp.com",
  databaseURL: "https://crwn-db-89b70.firebaseio.com",
  projectId: "crwn-db-89b70",
  storageBucket: "",
  messagingSenderId: "94276131012",
  appId: "1:94276131012:web:6aaec2839367b09d"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithgoogle = () => auth.signInWithPopup(provider);

export default firebase;
