import { auth, database } from '../../services/firebase';
import {toString} from '../../services/dates';
/**
 * Action to add comment to post.
 * Will throw if not authorized.
 * @param  postid - post id to add comment to
	* @param content - text of comment
 */
const doAddComment = (postId, content) => (dispatch, getState) => {
	const state = getState();
	const isAuthentificated = state.getIn(['auth', 'isAuthentificated']);
	if (!isAuthentificated) {
		throw new Error('can not create comment for not authentificated user');
	}

	const uid = auth().currentUser.uid;
	const displayName = auth().currentUser.displayName;
	const ref = database().ref(`comments/${postId}`);
	const id = ref.push().key;

	const commentData = {
		username: displayName,
		post_id: postId,
		uid,
		id,
		content,
		datetime: toString(new Date())
	};

	return ref.update({
		[id]: commentData
	});
};

export default doAddComment;
