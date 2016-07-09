import test from 'ava';
import recent from '../../../src/app/reducers/posts/recent';
import { fromJS } from 'immutable';
import chai from 'chai';
import chaiImmutable from 'chai-immutable';
chai.use(chaiImmutable);

import { SAVE_POSTS, SET_PAGE } from '../../../src/app/constants/posts';

const initialState = fromJS({
	list: [],
	totalPages: 0,
	page: 0,
	size: 10
});

test('recent should have initial state', () => {
	const result = recent(undefined, undefined);
	chai.expect(result).to.equal(initialState);
});

test('should save list of posts and calculate dependencies', () => {
	const payload = fromJS([...Array(17).keys()].map(i => i * i));
	const action = {
		type: SAVE_POSTS,
		payload
	};
	const result = recent(initialState, action);
	chai.expect(recent).to.not.equal(result);
	chai.expect(result.get('list')).to.equal(payload);
	chai.expect(result.get('totalPages')).to.equal(2);
	chai.expect(result.get('page')).to.equal(0);
});

test('should set active page number if less then totalPages', () => {
	const state = initialState.set('totalPages', 5);
	const action = {
		type: SET_PAGE,
		payload: 4
	};
	const result = recent(state, action);
	chai.expect(result).to.not.equal(state);
	chai.expect(result.get('page')).to.equal(4);
});


test('should set active page number if bigger or equal 0', () => {
	const state = initialState.merge({
			totalPages: 5,
			page: 1
		});

	const action = {
		type: SET_PAGE,
		payload: 0
	};
	const result = recent(state, action);
	chai.expect(result).to.not.equal(state);
	chai.expect(result.get('page')).to.equal(0);
});

test('should not set active page number if bigger or equal totalPages', () => {
	const state = initialState.set('totalPages', 5);
	const action = {
		type: SET_PAGE,
		payload: 5
	};
	const result = recent(state, action);
	chai.expect(result).to.equal(state);
});


test('should not set active page number if less then 0', () => {
	const state = initialState.merge({
			totalPages: 5,
			page: 1
		});

	const action = {
		type: SET_PAGE,
		payload: -1
	};
	const result = recent(state, action);
	chai.expect(result).to.equal(state);
});
