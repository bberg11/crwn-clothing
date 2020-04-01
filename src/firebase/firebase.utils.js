import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyA843TkUfS2gfcPUhDVRKkIrDj3pX5tp_g",
  authDomain: "crwn-db-aa2d3.firebaseapp.com",
  databaseURL: "https://crwn-db-aa2d3.firebaseio.com",
  projectId: "crwn-db-aa2d3",
  storageBucket: "crwn-db-aa2d3.appspot.com",
  messagingSenderId: "957450536389",
  appId: "1:957450536389:web:d668c4d2d46e24afecb7ac"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
