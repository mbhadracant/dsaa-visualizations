import React from 'react';
import ReactDOM from 'react-dom';
import viz from './visualizations/array';
import Dashboard from './components/Dashboard';

const App = () => (
  <div>
    <Dashboard />
  </div>
);

ReactDOM.render(<App />, document.getElementById('main'));
viz(500, 500);
