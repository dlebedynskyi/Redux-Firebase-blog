import { createReducer } from 'redux-immutablejs';
import { fromJS } from 'immutable';
import { SAVE_POSTS, SET_PAGE } from '../../constants/posts';

const initialState = fromJS({
  list: [],
		totalPages: 0,
  page: 0,
  size: 10
});

/**
 * Reducer to manage post listing
 */
export default createReducer(initialState, {
  [SAVE_POSTS]: (state, { payload }) => state.merge({
    list: payload,
    page: 0,
		totalPages: Math.ceil(payload.size / state.get('size'))
  }),
 [SET_PAGE]: (state, {payload}) => state.set('page', +payload)
});
