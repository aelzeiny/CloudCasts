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
    {/* <Switch>
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
      <ProtectedRoute path="/benches/new" component={BenchFormContainer} />
      <Route path="/benches/:benchId" component={BenchShowContainer} />
      <Route exact path="/" component={SearchContainer} />
    </Switch> */}
    <DiscoverContainer />

    <LoginFormContainer />
    <SignupFormContainer />
  </div>
);

export default App;
