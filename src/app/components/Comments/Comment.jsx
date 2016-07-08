import React from 'react';
import ImProp from 'react-immutable-proptypes';
import compose from 'recompose/compose';
import withHandlers from 'recompose/withHandlers';

import pure from 'recompose/pure';
import {Card, CardTitle, CardText, CardActions} from 'react-toolbox/lib/card';
import subTitle from '../helpers/subTitle';
import classnames from 'classnames';
import styles from './comments.scss';
import {IconButton} from 'react-toolbox/lib/button';

const hoc = compose(pure,
	withHandlers({
		onDelete: ({onDelete, comment}) => () => onDelete && onDelete(comment.get('id'))
	}));

const Comment = ({comment, uid, className, onDelete}) => {
	const classes = classnames(className, styles.comment);
	const canDelete = uid && uid === comment.get('uid');
	return (
		<Card className={classes}>
			<div className={styles.headRow}>
				<CardTitle className={styles.title} subtitle={subTitle(comment)}/>
				<CardActions className={styles.actions}>
					{canDelete
						? <IconButton icon="delete_forever" label="Delete" flat title="delete" onClick={onDelete}/>
						: null}
				</CardActions>
			</div>
			<CardText className={styles.text}>{comment.get('content')}</CardText>
		</Card>
	);
};

Comment.propTypes = {
	comment: ImProp.map,
	uid: React.PropTypes.string,
	className: React.PropTypes.string,
	onDelete: React.PropTypes.func
};

export {Comment};
export default hoc(Comment);
