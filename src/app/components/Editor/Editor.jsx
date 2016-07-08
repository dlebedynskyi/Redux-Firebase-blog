import React from 'react';

import compose from 'recompose/compose';
import withState from 'recompose/withState';
import withHandlers from 'recompose/withHandlers';
import pure from 'recompose/pure';
import setPropTypes from 'recompose/setPropTypes';

import {Button} from 'react-toolbox/lib/button';
import {Card, CardTitle, CardActions} from 'react-toolbox/lib/card';
import styles from './editor.scss';

import Input from 'react-toolbox/lib/input';
import RichTextEditor from 'react-rte';

const propTypes = {
	editorTitle: React.PropTypes.string,
	title: React.PropTypes.string,
	text: React.PropTypes.string,
	save: React.PropTypes.func.isRequired
};

const hoc = compose(
	setPropTypes(propTypes),
	pure,
	withState('title', 'setTitle', ({title}) => (title || '')),
	withState('text', 'setText', ({text}) => (text
		? RichTextEditor.createValueFromString(text, 'html')
		: RichTextEditor.createEmptyValue())),
	withHandlers({
		setTitle: ({setTitle}) => value => setTitle(value),
		setText: ({setText}) => value => setText(value),
		save: ({save, title, text}) => () => {
			const asHtml = text.toString('html');
			save(title, asHtml);
		}
}));

const Editor = ({
	editorTitle = 'Write something great',
	title,
	text,
	setTitle,
	setText,
	save
}) => (
	<div className={styles.container}>
		<Card className={styles.card}>
			<div className={styles.headRow}>
				<CardTitle title={editorTitle} className={styles.title}/>
				<CardActions>
					<Button primary raised label="Save" disabled={!title || !text} onClick={save}/>
				</CardActions>
			</div>
			<Card className={styles.text}>
				<div className={styles.title}>
					<Input label="Title" type="text" onChange={setTitle} value={title}/>
				</div>
				<div className={styles.body}>
					<RichTextEditor onChange={setText} value={text} placeholder="Write a story..."/>
				</div>
			</Card>
		</Card>
	</div>
);

Editor.propTypes = {
	editorTitle: React.PropTypes.string,
	title: React.PropTypes.string,
	text: React.PropTypes.object,
	setText: React.PropTypes.func.isRequired,
	setTitle: React.PropTypes.func.isRequired,
	save: React.PropTypes.func.isRequired
};

export {Editor};
export default hoc(Editor);
