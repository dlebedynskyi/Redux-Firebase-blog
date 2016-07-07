import { auth } from '../firebase';
const signOut = () => auth().signOut();

export default signOut;
