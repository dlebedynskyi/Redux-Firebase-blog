import React from 'react';

import ImProp from 'react-immutable-proptypes';
import compose from 'recompose/compose';
import withHandlers from 'recompose/withHandlers';
import setPropTypes from 'recompose/setPropTypes';
import classnames from 'classnames';
import pure from 'recompose/pure';

import {Card, CardTitle, CardActions} from 'react-toolbox/lib/card';
import {Button} from 'react-toolbox/lib/button';
import moment from 'moment';
import styles from './post.scss';

const propTypes = {
  post: ImProp.map.isRequired,
  open: React.PropTypes.func,
  className: React.PropTypes.string
};

const hoc = compose(setPropTypes(propTypes), withHandlers({
  open: ({open, post}) => () => open && open(post)
}), pure);

const Short = ({post, className}) => {
  const classes = classnames(className, styles.post);
  const time = post.get('datetime')
    ? moment(post.get('datetime')).format('dddd, MMMM Do YYYY, h:mm:ss a')
    : '';
 const at = time ? ` on ${time}` : '';
  return (
    <Card className={classes}>
      <CardTitle title={post.get('title')} subtitle={`By ${post.get('username')} ${at}`}/>
      <div className={styles.content}>
        {post.get('content')}
      </div>
      <CardActions>
        <Button label="See full"/>
      </CardActions>
    </Card>
  );
}

Short.propTypes = propTypes;

export {Short};
export default hoc(Short);
