import test from 'ava';
import comments from '../../src/app/reducers/comments';
import { fromJS } from 'immutable';
import chai from 'chai';
import chaiImmutable from 'chai-immutable';
chai.use(chaiImmutable);
import { GET_COMMENTS_LIST } from '../../src/app/constants/comments';

const initialState = fromJS({});

test('byId should return inital', () => {
	const result = comments(undefined, undefined);
	chai.expect(result).to.equal(initialState);
});

test('should save comments list', () => {
	const payload = {
		id: 123,
		list: 'LIST'
	};

	const action = {
		type: GET_COMMENTS_LIST,
		payload
	};

	const result = comments(initialState, action);
	chai.expect(result).to.not.equal(initialState);
	chai.expect(result.get(payload.id)).to.equal(payload.list);
});
