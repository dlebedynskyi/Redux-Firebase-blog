import { auth } from '../firebase';
export default (provider) => auth().signInWithPopup(provider);
