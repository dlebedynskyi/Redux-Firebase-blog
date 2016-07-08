import React from 'react';

import compose from 'recompose/compose';
import withState from 'recompose/withState';
import withHandlers from 'recompose/withHandlers';
import pure from 'recompose/pure';

import {Button} from 'react-toolbox/lib/button';
import {Card, CardTitle, CardActions} from 'react-toolbox/lib/card';
import styles from './editor.scss';

import Input from 'react-toolbox/lib/input';
import RichTextEditor from 'react-rte';

const hoc = compose(
	pure,
	withState('title', 'setTitle', ''),
	withState('text', 'setText', RichTextEditor.createEmptyValue()),
	withHandlers({
	setTitle: ({setTitle}) => value => setTitle(value),
	setText: ({setText}) => value => setText(value),
	save: ({save, title, text}) => () => {
		const asHtml = text.toString('html');
		save(title, asHtml);
	}
}));

const Editor = ({title, text, setTitle, setText, save}) => (
	<div className={styles.container}>
		<Card className={styles.card}>
			<CardTitle title="Write new post"/>
			<CardActions>
				<Button
					primary
					raised
					label="Save"
					disabled={!title || !text}
					onClick={save}/>
			</CardActions>
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
	title: React.PropTypes.string,
	text: React.PropTypes.object,
	setText: React.PropTypes.func.isRequired,
	setTitle: React.PropTypes.func.isRequired,
	save: React.PropTypes.func.isRequired
};

export {Editor};
export default hoc(Editor);
