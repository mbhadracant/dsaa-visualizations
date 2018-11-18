import styles from './_nav.css';
import { Component } from 'react';

export default class Nav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles['nav-body']}>
        {
          this.props.children
        }
      </div>
    );
  }
};
