const getRootList = state => state.getIn(['posts', 'recent']);
const getPost = state => state.getIn(['posts', 'byId']);
/**
 * selector to get full list of posts loaded into state
 * @param state - redux state
 * @returns Immutable list with posts
 */
export const getList = state => getRootList(state).get('list');
/**
 * selector to get only active page from posts
 * @param state - redux state
 * @returns Immutable list with post per page
 */
export const getListByPage = (state) => {
	const root = getRootList(state);
	const skip = root.get('page') * root.get('size');
	return getList(state).skip(skip).take(root.get('size'));
};
/**
 * selector to get current page number
 * @param state - redux state
 * @returns current page number
 */
export const getCurrentPage = (state) => getRootList(state).get('page');
/**
 * selector to get total page numbers
 * @param state - redux state
 * @returns total page number count
 */
export const getTotalPages = (state) => getRootList(state).get('totalPages');
/**
 * selector to get total count of all posts loaded into state
 * @param state - redux selector
 * @returns total count of all loaded posts
 */
export const getTotal = (state) => getList(state).size;
/**
 * selector to check if full post has been loaded to storage
 * @param state - redux state
	* @param id - id of post to check
 * @returns true if post has beed loaded to state
 */
export const isFullLoaded = (state, id) => getPost(state).has(id);
/**
 * selector to get full post data. should be paired with isFullLoaded
 * @param state - redux state
	* @param id - post id to chec
 * @returns Immutable Map with post data
 */
export const getFull = (state, id) => getPost(state).get(id);

export default { getList, getListByPage, getCurrentPage, getTotalPages,
	getTotal, isFullLoaded, getFull };
