import { initializeApp } from "firebase/app";
import { 
    getAuth,  
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged

} from 'firebase/auth';

import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8O1OTs5UAL_l-DENi6KReq42Qt9JfEnQ",
  authDomain: "crwn-clothing-db-81c92.firebaseapp.com",
  projectId: "crwn-clothing-db-81c92",
  storageBucket: "crwn-clothing-db-81c92.appspot.com",
  messagingSenderId: "545628070501",
  appId: "1:545628070501:web:c40fc9dc07e46f6b7d5c8c"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  console.log(userDocRef)
  const userSnapshot = await getDoc(userDocRef)
  
  if(!userSnapshot.exists()){
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation
      });

    } catch(error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;

}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password)return;

  return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password)return;

  return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListner = (callback) => onAuthStateChanged(auth, callback); 