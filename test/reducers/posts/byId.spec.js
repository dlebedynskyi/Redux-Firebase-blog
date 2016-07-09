import test from 'ava';
import byId from '../../../src/app/reducers/posts/byId';
import { fromJS } from 'immutable';
import chai from 'chai';
import chaiImmutable from 'chai-immutable';
chai.use(chaiImmutable);
import { SAVE_POST } from '../../../src/app/constants/posts';

const initialState = fromJS({});

test('byId should return inital', () => {
	const result = byId(undefined, undefined);
	chai.expect(result).to.equal(initialState);
});

test('byid should save post passed', () => {
	const payload = fromJS({
		id: 'ABC',
		content: 'TEST'
	});
	const action = {
		type: SAVE_POST,
		payload
	};

	const result = byId(initialState, action);
	chai.expect(result).to.not.equal(initialState);
	chai.expect(result.get('ABC')).to.equal(payload);
});
