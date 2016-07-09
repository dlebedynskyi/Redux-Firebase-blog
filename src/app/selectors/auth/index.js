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
export const isAuthentificated = (state) => !!getAuth(state).get(
	'isAuthentificated');
/**
 * selector to get UID of current user
 * @param state -redux state
 * @returns uid of current loged in user
 */
export const getUid = state => getAuth(state).getIn(['user', 'uid']);
/**
 * selector to get name of current user
 * @param state - redux state
 * @returns  name of current logged in user
 */
export const getName = state => getAuth(state).getIn(['user', 'displayName']);

export default { isAuthentificated, getUid, getName };
