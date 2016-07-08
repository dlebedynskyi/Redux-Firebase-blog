import React from 'react';

import ImProp from 'react-immutable-proptypes';
import compose from 'recompose/compose';
import withHandlers from 'recompose/withHandlers';
import setPropTypes from 'recompose/setPropTypes';
import classnames from 'classnames';
import pure from 'recompose/pure';

import {Card, CardTitle, CardActions} from 'react-toolbox/lib/card';
import {Button} from 'react-toolbox/lib/button';
import subTitle from '../helpers/subTitle';
import asHtml from '../helpers/markup';
import styles from './post.scss';

const propTypes = {
  post: ImProp.map.isRequired,
  open: React.PropTypes.func,
  className: React.PropTypes.string
};

const hoc = compose(
	setPropTypes(propTypes),
	withHandlers({
		open: ({open, post}) => () => open && open(post)
	}),
	pure);

const Short = ({post, className, open}) => {
  const classes = classnames(className, styles.post, styles.short);

  return (
    <Card className={classes}>
      <CardTitle
							title={post.get('title')}
							subtitle={subTitle(post)}/>
      <div className={styles.content} dangerouslySetInnerHTML={asHtml(post.get('content'))}/>
      <CardActions>
        <Button label="See full" onClick={open}/>
      </CardActions>
    </Card>
  );
};

Short.propTypes = propTypes;

export {Short};
export default hoc(Short);
