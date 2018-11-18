import React from 'react';
import ReactDOM from 'react-dom';
import viz from './visualizations/array';

const App = () => (
  <div>
    Hello world
  </div>
);

ReactDOM.render(<App />, document.getElementById('main'));
viz(500, 500);
