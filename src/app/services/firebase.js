import firebase from 'firebase';
// import config from 'appSettings'; //eslint-disable-line

let firebaseApp = null;
let firebaseAuth = null;
let firebaseDatabase = null;
/**
 * Function to init firebase connection
 * Will store changed references for auth and database
 * @param config - required. config for firebase
 * @returns Promise that will be resolved on completion.
 */
export const init = (config) =>
  (new Promise((resolve, reject) => {
		if (!config) { reject(); }

    firebaseApp = firebase.initializeApp(config);
    firebaseAuth = firebaseApp.auth();
    firebaseDatabase = firebaseApp.database();
    resolve();
  }));
/**
 * function to get stored reference for firebase auth
 * @returns firebase auth
 */
export const auth = () => {
  if (!firebaseAuth) {
    throw Error('firebase auth provider is not initalized. Run init first');
  }
  return firebaseAuth;
};
/**
 * Function to get stored reference for firebase database
 * @returns firebase database
 */
export const database = () => {
  if (!firebaseDatabase) {
    throw Error(
      'firebase database provider is not initalized. Run init first');
  }
  return firebaseDatabase;
};
