import { combineReducers } from 'redux-immutablejs';
import routing from './routing';

const index = combineReducers({
  routing,
});

export default index;
