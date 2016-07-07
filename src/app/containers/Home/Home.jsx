import React from 'react';
import {connect} from 'react-redux';
import compose from 'recompose/compose';
import lifecycle from 'recompose/lifecycle';

import doGetPosts from '../../actions/posts/doGetPosts';

const mapDispatchToProps = (dispatch) => ({
	getPosts: () => dispatch(doGetPosts())
});

const hoc = compose(
	connect(null, mapDispatchToProps),
	lifecycle({
		componentDidMount() {
			const {getPosts} = this.props;
			getPosts();
		}
	}));

const Home = () => (<div> Home </div>);

export {Home};
export default hoc(Home);
