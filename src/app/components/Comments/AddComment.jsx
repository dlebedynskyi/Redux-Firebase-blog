import React from 'react';

import compose from 'recompose/compose';
import withState from 'recompose/withState';
import withHandlers from 'recompose/withHandlers';
import pure from 'recompose/pure';

import {Card, CardTitle, CardActions} from 'react-toolbox/lib/card';
import {Button} from 'react-toolbox/lib/button';
import Input from 'react-toolbox/lib/input';

import classnames from 'classnames';
import styles from './comments.scss';

const hoc = compose(pure, withState('text', 'setText', ''),
withHandlers({
	setText: ({setText}) => value => setText(value),
	save: ({text, save, setText}) => () => {
		setText('');
		if (save) { save(text); }
	},
	cancel: ({setText}) => () => setText('')
}));

const AddComment = ({text, setText, save, cancel, className}) => {
	const classes = classnames(className, styles.addComment);
	return (
		<Card className={classes}>
			<CardTitle title="Add Comment"/>
				<Input className={styles.input} multiline value={text} onChange={setText}/>
			<CardActions>
				<Button primary raised label="Save" onClick={save} disabled={!text}/>
				<Button accent raised label="Cancel" onClick={cancel} disabled={!text}/>
			</CardActions>
		</Card>
	);
};


AddComment.propTypes = {
	text: React.PropTypes.string,
	setText: React.PropTypes.func.isRequired,
	save: React.PropTypes.func.isRequired,
	cancel: React.PropTypes.func.isRequired,
	className: React.PropTypes.string
};

export {AddComment};
export default hoc(AddComment);
