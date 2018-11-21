import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import array from './visualizations/array';
import Dashboard from './components/Dashboard';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2880B9',
    },
    background: {
      default: '#FCFCFC',
    },
  },
});

const App = () => (
  <div>
    <MuiThemeProvider theme={theme}>
      <Dashboard />
    </MuiThemeProvider>
  </div>
);

ReactDOM.render(<App />, document.getElementById('main'));
console.clear();
array(500, 500);
