import { SIGN_IN_START } from '../../constants/auth';

/**
 * Action to signal start of signin process
 */
const doSigninStart = () => ({
  type: SIGN_IN_START
});

export default doSigninStart;
