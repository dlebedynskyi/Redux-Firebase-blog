import { database } from '../../services/firebase';
import { toList } from './mapping';
 import { GET_COMMENTS_LIST } from '../../constants/comments';

const doGetByPost = postId => (dispatch) => {
	const comments = database().ref(`comments/${postId}`).orderByChild('datetime');
	comments.on('value', result => {
		const val = result.val() || {};
		const list = toList(val);

		dispatch({
			type: GET_COMMENTS_LIST,
			payload: {
				id: postId,
				list
			}
		});
	});
};

export default doGetByPost;
