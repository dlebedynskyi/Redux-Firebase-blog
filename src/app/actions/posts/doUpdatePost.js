import { auth, database } from '../../services/firebase';
import { toString } from '../../services/dates';
/**
 * Action to update post.
	* Will throw if user is not authorized.
 * @param  id - id of post to update
	* @param title - new post title
	* @param content - new post content
 */
const doUpdatePost = (id, title, content) =>
	(dispatch, getState) => {
		const state = getState();
		const isAuthentificated = state.getIn(['auth', 'isAuthentificated']);
		if (!isAuthentificated) {
			throw new Error('can not update for not authentificated user');
		}
		if (!id) { throw new Error('can not update post without id'); }

		const uid = auth().currentUser.uid;
		const displayName = auth().currentUser.displayName;
		const ref = database().ref().child(`posts/${id}`);

		const postData = {
			username: displayName,
			uid,
			title,
			content,
			id,
			datetime: toString(new Date())
		};

		return ref.update(postData);
	};

export default doUpdatePost;
