import { signInWithGoogle } from '../../services/auth';
import doSignInStart from './doSigninStart';
import doSetUser from './doSetUser';

const doSignInWithGoogle = () => (dispatch) => {
  dispatch(doSignInStart());
  return signInWithGoogle()
    .then(result => dispatch(doSetUser(result)));
};

export default doSignInWithGoogle;
