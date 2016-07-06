import { combineReducers } from 'redux-immutablejs';
import routing from './routing';
import firebase from './firebase';

const index = combineReducers({
  routing,
	firebase
});

export default index;
