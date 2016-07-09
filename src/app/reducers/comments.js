import { createReducer } from 'redux-immutablejs';
import { fromJS } from 'immutable';
import { GET_COMMENTS_LIST } from '../constants/comments';

const initialState = fromJS({});

export default createReducer(initialState, {
	[GET_COMMENTS_LIST]: (state, { payload }) => state.set(payload.id, payload.list)
});
