import test from 'ava';
import { SIGN_IN_COMPLETE } from '../../../src/app/constants/auth';
import doSignInComplete from '../../../src/app/actions/auth/doSignInComplete';

test('actions/doSignInComplete', t => {
	const payload = {
		uid: 'UID',
		displayName: 'NAME',
		email: 'EMAIL'
	};
	const action = doSignInComplete(payload);
	t.is(action.type, SIGN_IN_COMPLETE);
	t.is(action.payload.get('uid'), payload.uid);
	t.is(action.payload.get('displayName'), payload.displayName);
	t.is(action.payload.get('email'), payload.email);
});
