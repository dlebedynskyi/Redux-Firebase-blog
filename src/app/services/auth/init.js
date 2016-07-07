import { auth } from '../firebase';
import doSignInComplete from '../../actions/auth/doSignInComplete';
/**
 * Init function for auth based on firebase
 */
const init = (dispatch) =>
  (new Promise((resolve, reject) => {
    const unsub = auth()
      .onAuthStateChanged(
        user => {
          dispatch(doSignInComplete(user));
          if (unsub) { unsub(); }
          resolve();
        },
        error => reject(error)
      );
  }));

export default init;
