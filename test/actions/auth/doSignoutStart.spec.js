import test from 'ava';
import { SIGN_OUT_START } from '../../../src/app/constants/auth';
import doSignoutStart from '../../../src/app/actions/auth/doSignoutStart';

test('actions/doSignoutStart', t => {
	const action = doSignoutStart();
	t.is(action.type, SIGN_OUT_START);
});
