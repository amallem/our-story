import React from 'react';
import { Route } from 'react-router';
import { HashRouter } from 'react-router-dom';
import App from './containers/App';
import Home from './containers/Home';

export default (
  <HashRouter>
    <div>
      <Route exact path="/" component={App} />
      <Route exact path="/" component={Home} />
    </div>
  </HashRouter>
);