import { signInWithGoogle } from '../../services/auth';
import doSignInStart from './doSigninStart';
import doSignInComplete from './doSignInComplete';

const doSignInWithGoogle = () => (dispatch) => {
  dispatch(doSignInStart());
  return signInWithGoogle()
    .then(result => dispatch(doSignInComplete(result)));
};

export default doSignInWithGoogle;
