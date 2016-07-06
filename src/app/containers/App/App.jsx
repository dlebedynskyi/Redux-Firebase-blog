import React from 'react';
import AppBar from 'react-toolbox/lib/app_bar';
import Navigation from 'react-toolbox/lib/navigation';
import {Link} from 'react-router';
import styles from './app.scss';

const App = ({children}) => (
  <div className={styles.container}>
    <AppBar fixed flat>
      <div className={styles.left}>
        <Link to="home">Home</Link>
        <Link to="about">About</Link>
      </div>
      <Navigation type="horizontal">
        <Link to="about">Sign in</Link>
      </Navigation>
    </AppBar>
    <div className={styles.body}>
      {children}
    </div>
  </div>
);

App.propTypes = {
  children: React.PropTypes.node,
};

export default App;
