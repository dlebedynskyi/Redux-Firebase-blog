import { signInWithGoogle } from '../../services/auth';
import doSignInStart from './doSigninStart';
import doSignInComplete from './doSignInComplete';
/**
 * Action to handle sign in flow with google provider
 */
const doSignInWithGoogle = () => (dispatch) => {
  dispatch(doSignInStart());
  return signInWithGoogle()
    .then(result => dispatch(doSignInComplete(result.user)));
};

export default doSignInWithGoogle;
