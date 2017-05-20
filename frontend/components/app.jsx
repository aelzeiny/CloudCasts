import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import AuthComponent from './auth/auth_component';
import ListenComponent from './listen/listen_component';
import {LoginFormComponent} from './modals/login_form';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

import NavBarContainer from './navbar/navbar_container';
import DiscoverContainer from './discover/discover_component';

const App = () => (
  <div>
    <Switch>
      <ProtectedRoute path="/listen" component={ListenComponent} />
      <AuthRoute path="/" component={AuthComponent} />
    </Switch>
  </div>
);

export default App;
