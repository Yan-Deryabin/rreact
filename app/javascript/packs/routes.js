import React from 'react';
import { BrowserRouter as Router, Route, Switch }  from 'react-router-dom';
import App from './containers/App';
import HomePage from './containers/HomePage';
import Page1 from './containers/Page1';
import Page2 from './containers/Page2';
import Page3 from './containers/Page3';
import NotFound from './containers/NotFound';

export default (
  <Router>
    <App>
      <Switch>
        <Route exact component={HomePage} path='/' />
        <Route component={Page1} path='/page1' />
        <Route component={Page2} path='/page2' />
        <Route component={Page3} path='/page3' />
        <Route component={NotFound} />
      </Switch>
    </App>
  </Router>
);
