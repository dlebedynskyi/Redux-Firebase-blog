import test from 'ava';
import * as service from '../../../src/app/services/auth';
import init from '../../../src/app/services/auth/init';
import signInWithGoogle from '../../../src/app/services/auth/signInWithGoogle';
import signOut from '../../../src/app/services/auth/signOut';

test('services/auth has init method', (t) => {
  t.is(service.init, init);
});

test('services/auth has signInWithGoogle method', (t) => {
  t.is(service.signInWithGoogle, signInWithGoogle);
});


test('services/auth has signOut method', (t) => {
  t.is(service.signOut, signOut);
});
