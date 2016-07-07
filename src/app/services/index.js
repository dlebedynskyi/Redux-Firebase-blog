import * as firebase from './firebase';
import * as auth from './auth';

const init = (dispatch, getState) => {
  const config = getState().get('firebase');
  return firebase
		.init(config ? config.toJS() : null)
		.then(auth.init(dispatch));
};

export {
   init
};
