import React from 'react';

import ImProp from 'react-immutable-proptypes';
import styles from './post.scss';
import classnames from 'classnames';

import compose from 'recompose/compose';
import setPropTypes from 'recompose/setPropTypes';
import pure from 'recompose/pure';
import withHandlers from 'recompose/withHandlers';

import {Card, CardTitle, CardActions} from 'react-toolbox/lib/card';
import {IconButton} from 'react-toolbox/lib/button';

import subTitle from '../helpers/subTitle';
import asHtml from '../helpers/markup';

const propTypes = {
	post: ImProp.map.isRequired,
	uid: React.PropTypes.string,
	onDelete: React.PropTypes.func.isRequired,
	onEdit: React.PropTypes.func.isRequired,
	className: React.PropTypes.string
};

const hoc = compose(
	setPropTypes(propTypes),
	withHandlers({
		onDelete: ({onDelete, post}) => () => onDelete && onDelete(post.get('id')),
		onEdit: ({onEdit, post}) => () => onEdit && onEdit(post.get('id'))
	}),
	pure);

const Full = ({post, uid, className, onDelete, onEdit}) => {
	const classes = classnames(className, styles.post);
	const hasAccess = uid && post.get('uid') === uid;
	return (
		<Card className={classes}>
			<div className={styles.headRow}>
				<CardTitle title={post.get('title')} subtitle={subTitle(post)} classes={styles.title}/>
				<CardActions className={styles.actions}>
					{hasAccess
						? <IconButton icon="delete_forever" label="Delete" flat title="delete" onClick={onDelete}/>
						: null}
						{hasAccess
							? <IconButton icon="text_fields" label="Edit" flat title="Edit" onClick={onEdit}/>
							: null}
				</CardActions>
			</div>
			<div className={styles.content} dangerouslySetInnerHTML={asHtml(post.get('content'))}/>
		</Card>
	);
};

Full.propTypes = propTypes;

export {Full};
export default hoc(Full);
