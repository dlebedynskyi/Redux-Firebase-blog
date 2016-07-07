import { SIGN_IN_COMPLETE } from '../../constants/auth';

const doSetUser = (user) => ({
  type: SIGN_IN_COMPLETE,
  payload: user
});

export default doSetUser;
