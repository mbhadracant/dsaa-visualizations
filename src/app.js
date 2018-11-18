import React from 'react';
import ReactDOM from 'react-dom';
import styles from './kek.css';
import mouseAnimation from './visualizations/mouse';

const App = () => (
  <div className={styles.bg}>
    Hello world
  </div>
);

ReactDOM.render(<App />, document.getElementById('main'));
mouseAnimation();
