import {connect} from 'react-redux';
import compose from 'recompose/compose';
import withHandlers from 'recompose/withHandlers';
import {withRouter} from 'react-router';
import pure from 'recompose/pure';
import lifecycle from 'recompose/lifecycle';

import doGetPost from '../../actions/posts/doGetPost';
import doGetByPost from '../../actions/comments/doGetByPost';
import doAddComment from '../../actions/comments/doAddComment';
import doRemoveComment from '../../actions/comments/doRemoveComment';
import doRemovePost from '../../actions/posts/doRemovePost';

import urls from '../../constants/routes';

import * as posts from '../../selectors/posts';
import * as comments from '../../selectors/comments';
import * as auth from '../../selectors/auth';

const mapStateToProps = (state, {params}) => ({
	isAuthentificated: auth.isAuthentificated(state),
	id: params.id,
	uid: auth.getUid(state),
	isLoaded: posts.isFullLoaded(state, params.id),
	post: posts.getFull(state, params.id),
	areCommentLoaded: comments.areLoaded(state, params.id),
	commentsList: comments.getByPostId(state, params.id)
});

const mapDispatchToProps = (dispatch) => ({
	get: (id) => dispatch(doGetPost(id)),
	getComments: (id) => dispatch(doGetByPost(id)),
	addComment: (id, content) => dispatch(doAddComment(id, content)),
	removeComment: (postId, commentId) => dispatch(doRemoveComment(postId, commentId)),
	removePost: (postsId) => dispatch(doRemovePost(postsId))
});

const hoc = compose(
	connect(mapStateToProps, mapDispatchToProps),
	withRouter,
	lifecycle({
		componentDidMount() {
			const {get, isLoaded, id, areCommentLoaded, getComments} = this.props;
			if (!isLoaded) {
				get(id);
			}
			if (!areCommentLoaded) {
				getComments(id);
			}
		}
	}),

	withHandlers({
		addComment: ({addComment, id}) => (content) => addComment(id, content),
		editPost: ({id, router}) => () => router.push(`${urls.EDIT}/${id}`),
		removeComment: ({removeComment, id}) => (commentId) => removeComment(id, commentId),
		removePost: ({removePost, id, router}) => () => {
			removePost(id);
			router.push(urls.HOME);
		}
	}),
	pure);

export default hoc;
