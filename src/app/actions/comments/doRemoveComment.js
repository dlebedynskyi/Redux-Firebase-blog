import { database } from '../../services/firebase';

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
