import firebase from 'firebase';
import { auth } from './firebase';
import doSignInComplete from '../actions/auth/doSignInComplete';

const signInWithProvider = (provider) => auth().signInWithPopup(provider);

const signInWithGoogle = () => signInWithProvider(new firebase.auth.GoogleAuthProvider());

const signOut = () => auth().signOut();

const init = (dispatch) =>
  (new Promise((resolve, reject) => {
    const unsub = auth()
      .onAuthStateChanged(
        user => {
          dispatch(doSignInComplete(user));
          unsub();
          resolve();
        },
        error => reject(error)
      );
  }));

export { init, signInWithGoogle, signOut };
