import test from 'ava';
import { SIGN_IN_START } from '../../../src/app/constants/auth';
import doSigninStart from '../../../src/app/actions/auth/doSigninStart';

test('actions/doSigninStart', t => {
	const action = doSigninStart();
	t.is(action.type, SIGN_IN_START);
});
