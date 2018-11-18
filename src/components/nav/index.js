import styles from './_nav.css';
import { Component } from 'react';

function openNav() {
  const sideNav = document.getElementById("sideNav");
  if (sideNav.style.display === "none") {
    sideNav.style.display = "block";
  } else {
    sideNav.style.display = "none";
  }
}

export default class Nav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="sideNav" className={styles['nav-body']}>
        <div className={styles['nav-close-btn']} onClick={openNav}>
          &#9776;
        </div>
        {this.props.children}
      </div>
    );
  }
};
