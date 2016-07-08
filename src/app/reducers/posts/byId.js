import { createReducer } from 'redux-immutablejs';
import { fromJS } from 'immutable';
import { SAVE_POST } from '../../constants/posts';

const initialState = fromJS({});

export default createReducer(initialState, {
	[SAVE_POST]: (state, { payload }) =>
		(payload ?
			state.set(payload.get('id'), payload) :
			state)
});
