import { SIGN_IN_COMPLETE } from '../../constants/auth';
import {fromJS} from 'immutable';
/**
 * action to signal that signin is complete and store user payload
 */
const doSignInComplete = (user) => ({
		type: SIGN_IN_COMPLETE,
		payload: fromJS({
			uid: user.uid,
			displayName: user.displayName || user.email,
			email: user.email
		})
});

export default doSignInComplete;
