const root = (state) => state.get('comments');
/**
 * selector to get comment by post id
 * @param state - redux state
	* @param postId - post id
 * @returns Immutable list of comments for specified post id
 */
export const getByPostId = (state, postId) => root(state).get(postId);

/**
 * selector to check if storage has any comments loaded for post id
 * @param state - redux full state
	* @param postId - postId to check
 * @returns true if any post comment is in storage
 */
export const areLoaded = (state, postId) => root(state).has(postId);

export default { areLoaded, getByPostId };
