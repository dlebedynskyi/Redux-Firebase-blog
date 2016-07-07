import test from 'ava';
import proxyquire from 'proxyquire';
import sinon from 'sinon';

let doSignout;
let doSignoutStart;
let doSignoutComplete;
let signOut;
let dispatch;

test.beforeEach(() => {
  signOut = sinon.stub();
  doSignoutStart = sinon.stub();
  doSignoutComplete = sinon.stub();
  dispatch = sinon.spy();

  doSignout = proxyquire(
    '../../../src/app/actions/auth/doSignout', {
      '../../services/auth': { signOut },
      './doSignoutStart': { default: doSignoutStart },
      './doSignoutComplete': { default: doSignoutComplete }
    }).default;
});

test('actions/doSignout should handle signin flow', (t) => {
	doSignoutStart.returns('SIGN_OUT');
	doSignoutComplete.returns('COMPLETE');
	signOut.returns(Promise.resolve());
  const result = doSignout()(dispatch);
	return result.then(() => {
		t.is(dispatch.callCount, 2);
		t.truthy(dispatch.calledWith('SIGN_OUT'));
		t.truthy(dispatch.calledWith('COMPLETE'));
	});
});
