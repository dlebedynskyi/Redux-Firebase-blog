import test from 'ava';
import proxyquire from 'proxyquire';
import sinon from 'sinon';

test('services/auth signInWithProvider should like let people in',
  (t) => {
    const signInWithProvider = sinon.spy();
    const provider = sinon.stub();
    const firebase = {
      auth: { GoogleAuthProvider: provider }
    };

    const service = proxyquire(
      '../../../src/app/services/auth/signInWithGoogle', {
        './signInWithProvider': {'default': signInWithProvider},
				firebase
      }).default;

    service();
		t.truthy(provider.calledOnce);
		t.truthy(signInWithProvider.calledOnce);
  });
