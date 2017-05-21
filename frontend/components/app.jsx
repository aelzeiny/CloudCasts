import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import AuthComponent from './auth/auth_component';
import ListenComponent from './listen/listen_component';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <Switch>
      <ProtectedRoute path="/podcasts" component={ListenComponent} />
      <AuthRoute path="/" component={AuthComponent} />
    </Switch>
  </div>
);

export default App;
