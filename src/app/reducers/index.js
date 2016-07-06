import { combineReducers } from 'redux-immutablejs';
import root from './rootReducer';

const index = combineReducers({
  root,
});

export default index;
