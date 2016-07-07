import { SIGN_IN_COMPLETE } from '../../constants/auth';

const doSignInComplete = (user) => ({
  type: SIGN_IN_COMPLETE,
  payload: user
});

export default doSignInComplete;
