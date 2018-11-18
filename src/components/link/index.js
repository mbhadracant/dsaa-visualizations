import React from 'react';
import styles from '../nav/_nav.css';

export default ({title}) => {
  return (
    <div className={styles['nav-item--link']}>
      <a className={styles['nav-item--text']}>
        {title}
      </a>
    </div>
  );
};
