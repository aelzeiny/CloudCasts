import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import {AuthComponent} from './auth/auth_component';
import {SignupFormContainer} from './modals/signup_form';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

import NavBarContainer from './navbar/navbar_container';
import DiscoverContainer from './discover/discover_component';

const App = () => (
  <div>
    <Switch>
      <AuthRoute exact={true} path="/" component={AuthComponent} />
      <ProtectedRoute path="/listen" component={ListenComponent} />
    </Switch>
  </div>
);

export default App;
