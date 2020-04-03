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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) { return; }

  const userRef = await firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const addCollectionsAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();

  objectsToAdd.forEach((object) => {
    const newDocRef = collectionRef.doc();

    batch.set(newDocRef, object);
  });

  return await batch.commit();
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
