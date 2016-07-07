import firebase from 'firebase';
import { auth } from './firebase';
import doSetUser from '../actions/auth/doSetUser';

const signInWithProvider = (provider) => auth().signInWithPopup(provider);

const signInWithGoogle = () => signInWithProvider(new firebase.auth.GoogleAuthProvider());

const init = (dispatch) =>
  (new Promise((resolve, reject) => {
    const unsub = auth()
      .onAuthStateChanged(
        user => {
          dispatch(doSetUser(user));
          unsub();
          resolve();
        },
        error => reject(error)
      );
  }));

export { init, signInWithGoogle };
