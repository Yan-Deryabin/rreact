/* eslint no-console:0 */

// import '../../assets/stylesheets/application.css'
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import routes from './routes';

const component = (
  <BrowserRouter>
    {routes}
  </BrowserRouter>
);

ReactDOM.render(
  component,
  document.getElementById('root')
);
