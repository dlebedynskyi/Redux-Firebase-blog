import { createReducer } from 'redux-immutablejs';
import { fromJS } from 'immutable';
import { SIGN_IN_COMPLETE, SIGN_OUT_START } from '../constants/auth';

const initialState = fromJS({
  isAuthentificated: false,
  user: null
});

/**
 * Reducer to manage authorization and user info
 */
export default createReducer(initialState, {
  [SIGN_IN_COMPLETE]: (state, { payload }) =>
    state.merge({
      isAuthentificated: !!payload,
      user: payload || null
    }),
  [SIGN_OUT_START]: (state) =>
    state.merge({
      isAuthentificated: false,
      user: null
    })
});
