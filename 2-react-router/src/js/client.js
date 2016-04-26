import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// import Bootstrap from './vendors/bootstrap-without-jquery.min';

import Layout from './pages/Layout';
import Featured from './pages/Featured';
import Archives from './pages/Archives';
import Settings from './pages/Settings';

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Featured} />
      <Route path="archives(/:article)" name="archives" component={Archives} />
      <Route path="settings" name="settings" component={Settings} />
    </Route>
  </Router>,
app);
