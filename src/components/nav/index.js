import styles from './_nav.css';
import { Component } from 'react';

export default class Navigation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav id="navigator" className={styles.nav}>
        <ul>
          <li><a href="array.html">Array</a>
          </li>
          <li><a href="linked.html">LinkedList</a>
          </li>
          <li><a href="arraylist.html">ArrayList</a>
          </li>
          <li><a href="node.html">NodeList</a>
          </li>
        </ul>
      </nav>
    );
  }
};
