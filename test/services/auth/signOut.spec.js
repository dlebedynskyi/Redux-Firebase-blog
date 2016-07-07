import test from 'ava';
import proxyquire from 'proxyquire';
import sinon from 'sinon';

test('services/auth signout should do signout. like for real signout someone',
  (t) => {
    const auth = sinon.stub();
    const signOut = sinon.spy();
    auth.returns({ signOut });

    const service = proxyquire('../../../src/app/services/auth/signOut', {
      '../firebase': { auth }
    }).default;

    service();
    t.truthy(signOut.calledOnce);
  });
