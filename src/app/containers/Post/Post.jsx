/* eslint no-useless-escape: 0 */
import React from 'react';
import ImProp from 'react-immutable-proptypes';
import styles from './post.scss';

import {Full} from '../../components/Post';
import {List, AddComment} from '../../components/Comments';
import hoc from './hoc';

const Post = ({
	isLoaded,
	post,
	areCommentLoaded,
	commentsList,
	isAuthentificated,
	addComment,
	removeComment,
	removePost,
	editPost,
	uid
}) => {
	if (!isLoaded) {
		return <h5>Loading. Please wait</h5>;
	}
	return (
		<div className={styles.container}>
			{post
				? <Full post={post} uid={uid} onDelete={removePost} onEdit={editPost}/>
				: <h4>
					Post Count not be found.
				</h4>
			}
			<h4> Comments </h4>
			{isAuthentificated ? <AddComment save={addComment}/> : null}
			{areCommentLoaded
				? <List comments={commentsList} uid={uid} onDelete={removeComment}/>
				: null}
		</div>
	);
};

Post.propTypes = {
	isAuthentificated: React.PropTypes.bool,
	post: ImProp.map,
	uid: React.PropTypes.string,
	isLoaded: React.PropTypes.bool.isRequired,
	areCommentLoaded: React.PropTypes.bool.isRequired,
	commentsList: ImProp.list,
	addComment: React.PropTypes.func.isRequired,
	removeComment: React.PropTypes.func.isRequired,
	removePost: React.PropTypes.func.isRequired,
	editPost: React.PropTypes.func.isRequired
};

export {Post};
export default hoc(Post);
