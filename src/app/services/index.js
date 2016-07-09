import * as firebase from './firebase';
import * as auth from './auth';
import * as dates from './dates';

const init = (dispatch, getState) => {
  const config = getState().get('firebase');
  return firebase
		.init(config ? config.toJS() : null)
		.then(auth.init(dispatch));
};

export {
   init,
			dates
};
