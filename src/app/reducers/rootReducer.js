import { createReducer } from 'redux-immutablejs';
import { fromJS } from 'immutable';

const initial = fromJS({});

const root = createReducer(initial, {});

export default root;
