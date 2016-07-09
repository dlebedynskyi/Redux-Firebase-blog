import { database } from '../../services/firebase';
/**
 * Action to remove single comment from post
 * @param postid - id of post where to look for comment
	* @param id - comment id to remove
 */
const doRemoveComment = (postId, id) =>
	(dispatch, getState) => {
		const state = getState();
		const isAuthentificated = state.getIn(['auth', 'isAuthentificated']);
		if (!isAuthentificated) {
			throw new Error('can not create comment for not authentificated user');
		}
		const ref = database().ref(`comments/${postId}/${id}`);
		ref.remove();
	};

export default doRemoveComment;
