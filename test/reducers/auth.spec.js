import test from 'ava';
import chai from 'chai';
import chaiImmutable from 'chai-immutable';
import dirtyChai from 'dirty-chai';
import reducer from '../../src/app/reducers/auth';
import { fromJS } from 'immutable';
import { SIGN_IN_COMPLETE, SIGN_OUT_START } from '../../src/app/constants/auth';

chai.use(chaiImmutable);
chai.use(dirtyChai);

const initialState = fromJS({
  isAuthentificated: false,
  user: null
});

test('reducers/auth: should have default state', () => {
  const result = reducer(undefined, undefined);
  chai.expect(initialState).to.equal(result);
});

test('reducers/auth: should handle SIGN_IN_COMPLETE with data passed', () => {
	const action = {
		type: SIGN_IN_COMPLETE,
		payload: 'LOAD'
	};
	const result = reducer(initialState, action);
	chai.expect(result).to.not.equal(initialState);
	chai.expect(result.get('isAuthentificated')).to.be.true();
	chai.expect(result.get('user')).to.equal('LOAD');
});

test('reducers/auth: should handle SIGN_IN_COMPLETE with no data passed', () => {
	const action = {
		type: SIGN_IN_COMPLETE,
		payload: null
	};
	const state = initialState.merge({
		isAuthentificated: true,
		user: 'WRONG'
	});

	const result = reducer(state, action);
	chai.expect(result.get('isAuthentificated')).to.false();
	chai.expect(result.get('user')).to.be.null();
});

test('reducers/auth: should handle SIGN_OUT_START', () => {
	const action = {
		type: SIGN_OUT_START
	};
	const state = initialState.merge({
		isAuthentificated: true,
		user: 'WRONG'
	});

	const result = reducer(state, action);
	chai.expect(result.get('isAuthentificated')).to.false();
	chai.expect(result.get('user')).to.be.null();
});
