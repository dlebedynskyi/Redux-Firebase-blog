import firebase from 'firebase';
import signInWithProvider from './signInWithProvider';

const signInWithGoogle
 = () => signInWithProvider(new firebase.auth.GoogleAuthProvider());

export default signInWithGoogle;
