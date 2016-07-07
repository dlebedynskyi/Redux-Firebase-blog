import test from 'ava';
import { SIGN_OUT_COMPLETE } from '../../../src/app/constants/auth';
import doSignoutComplete from '../../../src/app/actions/auth/doSignoutComplete';

test('actions/doSignoutComplete', t => {
	const action = doSignoutComplete();
	t.is(action.type, SIGN_OUT_COMPLETE);
});
