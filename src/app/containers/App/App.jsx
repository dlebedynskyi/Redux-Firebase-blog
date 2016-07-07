import React from 'react';
import AppBar from 'react-toolbox/lib/app_bar';
import Navigation from 'react-toolbox/lib/navigation';
import {withRouter} from 'react-router';
import styles from './app.scss';
import compose from 'recompose/compose';
import lifecycle from 'recompose/lifecycle';
import withHandlers from 'recompose/withHandlers';
import urls from '../../constants/routes';
import {Button} from 'react-toolbox/lib/button';
import {connect} from 'react-redux';
import * as selector from '../../selectors/auth';
import doSignout from '../../actions/auth/doSignout';

const mapStateToProps = (state) => ({isAuthentificated: selector.isAuthentificated(state)});

const mapDispatchToProps = (dispatch) => ({
  signout: () => dispatch(doSignout())
});

const hoc = compose(
	connect(mapStateToProps, mapDispatchToProps),
	withRouter,
	withHandlers({
    toSignin: ({router}) => () => router.replace(urls.SIGN_IN),
    toHome: ({router}) => () => router.replace(urls.HOME),
    toAbout: ({router}) => () => router.replace(urls.ABOUT)
  }),
	lifecycle({
   componentWillReceiveProps(nextProps) {
     const {isAuthentificated, toSignin, toHome} = nextProps;
     if (this.props.isAuthentificated && !isAuthentificated) {
       toSignin();
     } else if (!this.props.isAuthentificated && isAuthentificated) {
       toHome();
     }
   }
}));

const App = ({children, signout, isAuthentificated, toHome, toAbout}) => (
  <div className={styles.container}>
    <AppBar fixed flat>
      <div className={styles.left}>
        {isAuthentificated
          ? (
            <Button flat onClick={toHome} label="Home"/>
          )
          : null}
        <Button flat onClick={toAbout} label="About"/>
      </div>
      <Navigation type="horizontal">
        {isAuthentificated
          ? (<Button flat onClick={signout} label="Sign out"/>)
          : null
}
      </Navigation>
    </AppBar>
    <div className={styles.body}>
      {children}
    </div>
  </div>
);

App.propTypes = {
  children: React.PropTypes.node,
  isAuthentificated: React.PropTypes.bool,
  signout: React.PropTypes.func.isRequired,
	toHome: React.PropTypes.func.isRequired,
	toAbout: React.PropTypes.func.isRequired
};

export {App};
export default hoc(App);
