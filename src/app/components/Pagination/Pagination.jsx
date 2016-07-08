import React from 'react';

import pure from 'recompose/pure';
import setPropTypes from 'recompose/setPropTypes';
import compose from 'recompose/compose';
import withHandlers from 'recompose/withHandlers';
import classnames from 'classnames';
import styles from './pagination.scss';
import {Card} from 'react-toolbox/lib/card';
import {IconButton} from 'react-toolbox/lib/button';

const propTypes = {
  current: React.PropTypes.number,
  total: React.PropTypes.number,
  navigateTo: React.PropTypes.func,
  className: React.PropTypes.string
};

const hoc = compose(setPropTypes(propTypes), withHandlers({
  next: ({navigateTo, current, total}) => () => {
    if (navigateTo && current < total) {
      navigateTo(current + 1);
    }
  },
  previous: ({navigateTo, current}) => () => {
    if (navigateTo && current > 0) {
      navigateTo(current - 1);
    }
  }
}), pure);

const Pagination = ({current, total, next, previous, className}) => {
  const classes = classnames(className, styles.container);
  return (
    <Card className={classes}>
      <div>
        <IconButton icon="keyboard_arrow_left" disabled={current === 0} onClick={previous}/>
				<span> Page {current + 1} of {total} </span>
        <IconButton icon="keyboard_arrow_right" disabled={current === total} onClick={next}/>
      </div>
    </Card>
  );
};
Pagination.propTypes = {
  ...propTypes,
  next: React.PropTypes.func,
  previous: React.PropTypes.func
};

export {Pagination};
export default hoc(Pagination);
