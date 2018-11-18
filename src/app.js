import ReactDOM from 'react-dom';
import styles from './style.css';
import Navigation from './components/nav';

function openNav() {
  const sideNav = document.getElementById("navigator");

  if (sideNav.style.display === "none" || sideNav.style.display === "") {
    sideNav.style.display = "block";
  } else {
    sideNav.style.display = "none";
  }
}

const App = () => {
  return (
    <div>
      <div className={styles.nav_btn}>
        <span id="nav_close_btn" onClick={openNav}> &#9776; </span> Data Visualisation
        <Navigation />
      </div>

      <div className={styles.content_body}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>
    </div>
);
};

ReactDOM.render(
  <App/>
, document.getElementById('main'));
