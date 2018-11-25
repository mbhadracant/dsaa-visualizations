import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import Dashboard from './components/Dashboard';
import store from './state/store';
import { createSvg, createBgRect } from './visualizations/common';

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
  <Provider store={store}>
    <div>
      <MuiThemeProvider theme={theme}>
        <Dashboard />
      </MuiThemeProvider>
    </div>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('main'));
console.clear();
const svg = createSvg(500, 500);
createBgRect(svg, 500, 500);
