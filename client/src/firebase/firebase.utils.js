import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyA843TkUfS2gfcPUhDVRKkIrDj3pX5tp_g',
  authDomain: 'crwn-db-aa2d3.firebaseapp.com',
  databaseURL: 'https://crwn-db-aa2d3.firebaseio.com',
  projectId: 'crwn-db-aa2d3',
  storageBucket: 'crwn-db-aa2d3.appspot.com',
  messagingSenderId: '957450536389',
  appId: '1:957450536389:web:d668c4d2d46e24afecb7ac',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }

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
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const getUserCartRef = async (userId) => {
  const cartsRef = firestore.collection('carts').where('userId', '==', userId);
  const snapShot = await cartsRef.get();

  if (snapShot.empty) {
    const cartDocRef = firestore.collection('carts').doc();

    await cartDocRef.set({ userId, cartItems: [] });

    return cartDocRef;
  } else {
    return snapShot.docs[0].ref;
  }
};

firebase.initializeApp(config);

export const addCollectionsAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();

  objectsToAdd.forEach((object) => {
    const newDocRef = collectionRef.doc();

    batch.set(newDocRef, object);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (snapshot) => {
  const collections = snapshot.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  return collections.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;

    return accumulator;
  }, {});
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
