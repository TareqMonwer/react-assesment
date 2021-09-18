import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import makeServer from './server';
import App from './App';
import 'assets/css/style.scss';

// if (process.env.NODE_ENV === 'development') {
//   makeServer({ environment: 'development' });
// } 

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
