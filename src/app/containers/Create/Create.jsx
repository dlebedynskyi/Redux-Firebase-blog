import React from 'react';
import {connect} from 'react-redux';
import compose from 'recompose/compose';
import withHandlers from 'recompose/withHandlers';
import {withRouter} from 'react-router';
import Editor from '../../components/Editor';
import urls from '../../constants/routes';
import doCreatePost from '../../actions/posts/doCreatePost';

const mapDispatchToProps = dispatch => ({
	create: (title, text) => dispatch(doCreatePost(title, text))
});

const hoc = compose(
	withRouter,
	connect(null, mapDispatchToProps),
  withHandlers({
		create: ({create, router}) =>
			(title, text) => {
				create(title, text);
				router.push(urls.HOME);
		}
	}));

const Create = ({create}) => (<Editor save={create}/>);

Create.propTypes = {
  title: React.PropTypes.string,
  text: React.PropTypes.object,
  setText: React.PropTypes.func.isRequired,
  setTitle: React.PropTypes.func.isRequired,
		create: React.PropTypes.func.isRequired
};

export {Create};
export default hoc(Create);
