import React from 'react';
import ImProp from 'react-immutable-proptypes';
import compose from 'recompose/compose';
import pure from 'recompose/pure';
import classnames from 'classnames';
import styles from './comments.scss';
import Comment from './Comment';

const hoc = compose(
	pure
);

const List = ({comments, uid, onDelete, className}) => {
	const classes = classnames(styles.list, className);
	return (
			<div className={classes}>
				{comments && comments.size
					? comments.map(e =>
						<Comment
							key={`comment_${e.get('id')}`}
							comment={e}
							onDelete={onDelete}
							uid={uid}
						/>)
					: null}
			</div>
	);
};

List.propTypes = {
	comments: ImProp.list.isRequired,
	uid: React.PropTypes.string,
	onDelete: React.PropTypes.func,
	className: React.PropTypes.string
};

export {List};
export default hoc(List);
