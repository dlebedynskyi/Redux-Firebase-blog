import { combineReducers } from 'redux-immutablejs';
import routing from './routing';
import firebase from './firebase';
import auth from './auth';
import posts from './posts';

const index = combineReducers({
  routing,
	firebase,
	auth,
	posts
});

export default index;
