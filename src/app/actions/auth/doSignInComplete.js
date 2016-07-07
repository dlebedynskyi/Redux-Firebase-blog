import { SIGN_IN_COMPLETE } from '../../constants/auth';
/**
 * action to signal that signin is complete and store user payload
 */
const doSignInComplete = (user) => ({
  type: SIGN_IN_COMPLETE,
  payload: user
});

export default doSignInComplete;
