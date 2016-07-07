import firebase from 'firebase';
// import config from 'appSettings'; //eslint-disable-line

let firebaseApp = null;
let firebaseAuth = null;
let firebaseDatabase = null;

const init = (config) =>
  (new Promise((resolve, reject) => {
		if (!config) { reject(); }

    firebaseApp = firebase.initializeApp(config);
    firebaseAuth = firebaseApp.auth();
    firebaseDatabase = firebaseApp.database();
    resolve();
  }));

const auth = () => {
  if (!firebaseAuth) {
    throw Error('firebase auth provider is not initalized. Run init first');
  }
  return firebaseAuth;
};

const database = () => {
  if (!firebaseDatabase) {
    throw Error(
      'firebase database provider is not initalized. Run init first');
  }
  return firebaseDatabase;
};

export { init, auth, database };
