import { combineReducers } from 'redux-immutablejs';
import routing from './routing';
import firebase from './firebase';
import auth from './auth';
import posts from './posts';
import comments from './comments';

const index = combineReducers({
  routing,
	firebase,
	auth,
	posts,
	comments
});

export default index;
