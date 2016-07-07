import test from 'ava';
import proxyquire from 'proxyquire';
import sinon from 'sinon';

test('services/auth signInWithProvider should like let people in',
  (t) => {
    const auth = sinon.stub();
    const signInWithPopup = sinon.spy();
    auth.returns({ signInWithPopup });

    const service = proxyquire('../../../src/app/services/auth/signInWithProvider', {
      '../firebase': { auth }
    }).default;

		const provider = 'test';
    service(provider);
    t.truthy(signInWithPopup.calledOnce);
		t.truthy(signInWithPopup.calledWith(provider));
  });
