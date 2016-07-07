import { combineReducers } from 'redux-immutablejs';
import routing from './routing';
import firebase from './firebase';
import auth from './auth';

const index = combineReducers({
  routing,
	firebase,
	auth
});

export default index;
