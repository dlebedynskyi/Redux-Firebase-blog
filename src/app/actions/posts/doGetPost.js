import { database } from '../../services/firebase';
import { toRecord } from './mapping';
import { SAVE_POST } from '../../constants/posts';

const doGetPosts = (id) => (dispatch) => {
	const post = database().ref(`posts/${id}`);
	post.off();

	post.on('value', (result) => {
		const val = result.val() || {};
		const record = toRecord(val);
		dispatch({
			type: SAVE_POST,
			payload: record
		});
	});
};

export default doGetPosts;
