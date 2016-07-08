import React from 'react';
import ImProp from 'react-immutable-proptypes';
import {connect} from 'react-redux';
import compose from 'recompose/compose';
import withHandlers from 'recompose/withHandlers';
import {withRouter} from 'react-router';
import lifecycle from 'recompose/lifecycle';

import Editor from '../../components/Editor';

import urls from '../../constants/routes';
import doUpdatePost from '../../actions/posts/doUpdatePost';

import * as posts from '../../selectors/posts';
import * as auth from '../../selectors/auth';

const mapStateToProps = (state, {params}) => ({
	isAuthentificated: auth.isAuthentificated(state),
	id: params.id,
	uid: auth.getUid(state),
	isLoaded: posts.isFullLoaded(state, params.id),
	post: posts.getFull(state, params.id)
});

const mapDispatchToProps = dispatch => ({
	update: (id, title, text) => dispatch(doUpdatePost(id, title, text))
});

const hoc = compose(
	withRouter,
	connect(mapStateToProps, mapDispatchToProps),
	lifecycle({
			componentDidMount() {
				const {get, isLoaded, id} = this.props;
				if (!isLoaded) {
					get(id);
				}
			}
	}),
 withHandlers({
		update: ({update, router, post, uid}) =>
			(title, text) => {
				if (uid && post.get('uid') === uid) {
				update(post.get('id'), title, text);
				router.push(urls.HOME);
			}
		}
	}));

const Edit = ({
	isAuthentificated,
	isLoaded,
	post,
	uid,
	update}) => {
		if (!isLoaded) {
			return <h5>Loading. Please wait</h5>;
		}

		if (isLoaded && !post) {
			return <h4> Looks like this post is missing. </h4>;
		}

		if (!isAuthentificated || !uid || post.get('uid') !== uid) {
			return <h4> Go back. Looks like you don't have permission to do this </h4>;
		}

		return (<Editor save={update} title={post.get('title')} text={post.get('content')}/>);
	};

Edit.propTypes = {
	isAuthentificated: React.PropTypes.bool,
	post: ImProp.map,
	uid: React.PropTypes.string,
	isLoaded: React.PropTypes.bool.isRequired,
	update: React.PropTypes.func.isRequired
};

export {Edit};
export default hoc(Edit);
