import test from 'ava';
import proxyquire from 'proxyquire';
import sinon from 'sinon';

test('services/auth init should have onAuthStateChanged registered', (t) => {
  const doSignInComplete = sinon.stub();
  const dispatch = sinon.spy();
  const auth = sinon.stub();

  const init = proxyquire('../../../src/app/services/auth/init', {
    '../firebase': { auth },
    '../../actions/auth/doSignInComplete': { default: doSignInComplete }
  }).default;

  const user = 'USER';
  doSignInComplete.withArgs(user).returns('CHANGED');
  const onAuthStateChanged = (cb) => { cb(user); };

  auth.returns({
    onAuthStateChanged
  });

  return init(dispatch)
    .then(() => {
      t.is(dispatch.callCount, 1);
      t.truthy(dispatch.calledWith('CHANGED'));
    });
});
