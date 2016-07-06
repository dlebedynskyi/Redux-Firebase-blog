import React from 'react';
import AppBar from 'react-toolbox/lib/app_bar';
import Navigation from 'react-toolbox/lib/navigation';
import Link from 'react-toolbox/lib/link';
import styles from './app.scss';

const App = () => (
  <div className={styles.container}>
    <AppBar fixed flat>
      <div className={styles.left}>
        <Link href="/home" icon="home" label="Home" />
        <Link href="/about" icon="description" label="About" />
      </div>
      <Navigation type="horizontal">
        <Link label="Sign In" icon="perm_identity" />
      </Navigation>
    </AppBar>
    <div className={styles.body}>
      Content
    </div>
  </div>
);

export default App;
