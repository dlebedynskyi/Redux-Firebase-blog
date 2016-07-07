import test from 'ava';
import { SIGN_IN_COMPLETE } from '../../../src/app/constants/auth';
import doSignInComplete from '../../../src/app/actions/auth/doSignInComplete';

test('actions/doSignInComplete', t => {
	const payload = 'TEST';
	const action = doSignInComplete(payload);
	t.is(action.type, SIGN_IN_COMPLETE);
	t.is(action.payload, payload);
});
