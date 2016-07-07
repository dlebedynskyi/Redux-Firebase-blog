import React from 'react';
import {Card, CardTitle} from 'react-toolbox/lib/card';
import {Button} from 'react-toolbox/lib/button';
import styles from './signin.scss';

import compose from 'recompose/compose';
import {connect} from 'react-redux';
import {doSignInWithGoogle} from '../../actions/auth';

const mapDispatchToProps = (dispatch) => ({
  signIn: () => dispatch(doSignInWithGoogle())
});

const hoc = compose(connect(null, mapDispatchToProps));

const Signin = ({signIn}) => (
  <div className={styles.container}>
    <Card className={styles.card}>
      <CardTitle title="Sign In"/>
      <div className={styles.buttons}>
        <Button primary raised label="Using Google" onClick={signIn}/>
      </div>
    </Card>
  </div>
);

Signin.propTypes = {
	signIn: React.PropTypes.func.isRequired
};

export {Signin};
export default hoc(Signin);
