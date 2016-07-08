import doRemoveAllComments from '../comments/doRemoveAllComments';

import { database } from '../../services/firebase';

const doRemovePost = (postId) =>
	(dispatch, getState) => {
		const state = getState();
		const isAuthentificated = state.getIn(['auth', 'isAuthentificated']);
		if (!isAuthentificated) {
			throw new Error('can not create comment for not authentificated user');
		}
		const ref = database().ref(`posts/${postId}`);

		ref.remove((e) => {
			if (!e) { dispatch(doRemoveAllComments(postId)); }
		});
	};

export default doRemovePost;
