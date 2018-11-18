import ReactDOM from "react-dom";
import styles from './kek.css';
import createBarChart from './visualizations/bar-chart';
import mouseAnimation from './visualizations/mouse';

const App = () => {
  return (
    <div className={styles.bg}>
      Hello world
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("main"));
mouseAnimation();