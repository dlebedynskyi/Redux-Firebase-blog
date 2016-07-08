import React from 'react';
import {connect} from 'react-redux';
import compose from 'recompose/compose';
import withState from 'recompose/withState';
import withHandlers from 'recompose/withHandlers';
import {withRouter} from 'react-router';

import {Button} from 'react-toolbox/lib/button';
import {Card, CardTitle, CardActions} from 'react-toolbox/lib/card';
import styles from './create.scss';
import Input from 'react-toolbox/lib/input';

import urls from '../../constants/routes';

import doCreatePost from '../../actions/posts/doCreatePost';

const mapDispatchToProps = dispatch => ({
	create: (title, text) => dispatch(doCreatePost(title, text))
});

const hoc = compose(
	withRouter,
	connect(null, mapDispatchToProps),
	withState('title', 'setTitle', ''),
	withState('text', 'setText', ''),
  withHandlers({
		setTitle: ({setTitle}) => value => setTitle(value),
		setText: ({setText}) => value => setText(value),
		create: ({create, title, text, router}) => () => {
			create(title, text);
			router.push(urls.HOME);
		}
	}));

const Create = ({title, text, setTitle, setText, create}) => (
  <div className={styles.container}>
    <Card className={styles.card}>
      <CardTitle title="Write new post"/>
			<CardActions>
				<Button primary raised label="Save" disabled={!title || !text} onClick={create}/>
			</CardActions>
      <Card className={styles.text}>
        <div className={styles.title}>
          <Input label="Title" type="text" onChange={setTitle} value={title}/>
        </div>
        <div className={styles.body}>
          <Input label="Post" type="text" multiline onChange={setText} value={text}/>
        </div>
      </Card>
    </Card>
  </div>
);

Create.propTypes = {
  title: React.PropTypes.string,
  text: React.PropTypes.string,
  setText: React.PropTypes.func.isRequired,
  setTitle: React.PropTypes.func.isRequired,
	create: React.PropTypes.func.isRequired
};

export {Create};
export default hoc(Create);
