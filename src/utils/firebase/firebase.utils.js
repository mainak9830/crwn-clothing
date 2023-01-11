import { initializeApp } from "firebase/app";
import { 
    getAuth,  
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider

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

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
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
        createdAt
      });

    } catch(error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;

}