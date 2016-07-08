import { database } from '../../services/firebase';
import { toList } from './mapping';
import { SAVE_POSTS } from '../../constants/posts';

const doGetPosts = () => (dispatch) => {
	const posts = database().ref('posts');
	const query = posts.limitToLast(100);

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

export default doGetPosts;
