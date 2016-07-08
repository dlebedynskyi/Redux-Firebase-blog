import test from 'ava';
import proxyquire from 'proxyquire';
import sinon from 'sinon';

let doSignInWithGoogle;
let doSigninStart;
let doSignInComplete;
let signInWithGoogle;
let dispatch;

test.beforeEach(() => {
  signInWithGoogle = sinon.stub();
  doSigninStart = sinon.stub();
  doSignInComplete = sinon.stub();
  dispatch = sinon.spy();

  doSignInWithGoogle = proxyquire(
    '../../../src/app/actions/auth/doSignInWithGoogle', {
      '../../services/auth': { signInWithGoogle },
      './doSigninStart': { 'default': doSigninStart },
      './doSignInComplete': { 'default': doSignInComplete }
    }).default;
});

test('actions/doSignInWithGoogle should handle signin flow', (t) => {
	const user = {user: 'FAKE'};
	doSigninStart.returns('SIGN_IN');
	doSignInComplete.withArgs('FAKE').returns('COMPLETE');
	signInWithGoogle.returns(Promise.resolve(user));
  const result = doSignInWithGoogle()(dispatch);
	return result.then(() => {
		t.is(dispatch.callCount, 2);
		t.truthy(dispatch.calledWith('SIGN_IN'));
		t.truthy(dispatch.calledWith('COMPLETE'));
	});
});
