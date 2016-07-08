/**
 * Method to get auth state
 * @param state full app state
 * @returns auth state
 */
const getAuth = (state) => state.get('auth');

/**
 * Selector to check for use authentification
 * @param state - full app state
 * @returns true if user in authenificated
 */
const isAuthentificated = (state) => !!getAuth(state).get('isAuthentificated');

const getUid = state => {
	const auth = getAuth(state);
	const uid = auth.getIn(['user', 'uid']);
	return uid;
};

export { getAuth, isAuthentificated, getUid };
