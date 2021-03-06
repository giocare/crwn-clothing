import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyA9yNpGQnGlZPL3Oy5EjlB-1g8fcrvu7ak",
  authDomain: "crown-db-ac639.firebaseapp.com",
  databaseURL: "https://crown-db-ac639.firebaseio.com",
  projectId: "crown-db-ac639",
  storageBucket: "crown-db-ac639.appspot.com",
  messagingSenderId: "1008623215522",
  appId: "1:1008623215522:web:55ca0a9f1787ed48d208fb",
  measurementId: "G-Q3GX5VQ1JB"
};


  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
    const userRef = firestore.doc(`users/${userAuth.uid}`);
  
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
  };
  

  firebase.initializeApp(config)

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider()
  provider.setCustomParameters({prompt: 'select_account'})
  export const signInWithGoogle = () => auth.signInWithPopup(provider)


  export default firebase;