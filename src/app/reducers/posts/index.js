import { combineReducers } from 'redux-immutablejs';
import byId from './byId';
import recent from './recent';

export default combineReducers({
	byId,
	recent
});
