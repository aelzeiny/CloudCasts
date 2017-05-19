import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import {LoginFormContainer} from './modals/login_form';
import {SignupFormContainer} from './modals/signup_form';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

import NavBarContainer from './navbar/navbar_container';
import DiscoverContainer from './discover/discover_component';

const App = () => (
  <div>
    <header>
      <Route path="/" component={NavBarContainer} />
    </header>
    <Switch>
      <ProtectedRoute path="/podcasts" compone/>
      <AuthRoute path="/auth" component={HeroComponent}/>
    </Switch>
  </div>
);

export default App;
