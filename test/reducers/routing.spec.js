import test from 'ava';
import chai from 'chai';
import chaiImmutable from 'chai-immutable';
import reducer from '../../src/app/reducers/routing';
import { fromJS } from 'immutable';
import { LOCATION_CHANGE } from 'react-router-redux';
chai.use(chaiImmutable);

const initialState = fromJS({
  locationBeforeTransitions: null
});

test('reducers/routing should define initialState', () => {
  const state = reducer(undefined, undefined);
  chai.expect(state).to.equal(initialState);
});

test('reducers/routing should set payload on LOCATION_CHANGE', () => {
	const state = initialState.merge({
		locationBeforeTransitions: 'BEFORE'
	});
	const action = {
		type: LOCATION_CHANGE,
		payload: 'AFTER'
	};
  const result = reducer(state, action);
  chai.expect(result).to.not.equal(state);
	chai.expect(result.get('locationBeforeTransitions'))
		.to.equal(action.payload);
});
