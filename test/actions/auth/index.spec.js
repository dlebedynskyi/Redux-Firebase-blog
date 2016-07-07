import test from 'ava';
import * as actions from '../../../src/app/actions/auth';
import doSignInComplete from '../../../src/app/actions/auth/doSignInComplete';
import doSignInWithGoogle from '../../../src/app/actions/auth/doSignInWithGoogle';
import doSignout from '../../../src/app/actions/auth/doSignout';

test('actions/auth/index should have doSignInComplete', t => {
  t.is(actions.doSignInComplete, doSignInComplete);
});

test('actions/auth/index should have doSignInWithGoogle', t => {
  t.is(actions.doSignInWithGoogle, doSignInWithGoogle);
});

test('actions/auth/index should have doSignout', t => {
  t.is(actions.doSignout, doSignout);
});
