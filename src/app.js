import ReactDOM from 'react-dom';
import styles from './style.css';
import mouseAnimation from './visualizations/mouse';
import Nav from './components/nav';
import Link from './components/link';

const navItems = ['Item', 'Item', 'Item', 'Item', 'Item'];

const App = () => {
  return (
    <div className={styles.bg}>
      <Nav>
        {
          navItems.map((item) => {
            return (
              <Link title={item}/>
            )
          })
        }
      </Nav>
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('main'));
mouseAnimation();
