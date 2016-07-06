import { createReducer } from 'redux-immutablejs';
import { fromJS } from 'immutable';
const initialState = fromJS({});

/**
 * Simple reducer to store firebase settings
 * Must be configures from iniital redux state via config.
 * See index.jsx for details of configuration.
 */
export default createReducer(initialState, {});
