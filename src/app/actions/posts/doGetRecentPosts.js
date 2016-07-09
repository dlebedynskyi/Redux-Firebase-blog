import { database } from '../../services/firebase';
import { toList } from './mapping';
import { SAVE_POSTS } from '../../constants/posts';
export const LIMIT = 100;
/**
 * Action to get list of recent posts from db.
	* will limit to 100 post
 */
const doGetRecentPosts = () => (dispatch) => {
	const posts = database().ref('posts');
	const query = posts.limitToLast(LIMIT);

	query.off();
	query.on('value', result => {
		const val = result.val() || {};
		const list = toList(val);

		dispatch({
			type: SAVE_POSTS,
			payload: list
		});
	});
};

export default doGetRecentPosts;
