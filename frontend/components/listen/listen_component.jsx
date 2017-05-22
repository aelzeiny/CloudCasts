import React from 'react';
import {connect} from 'react-redux';
import NavbarContainer from '../navbar/navbar_container';
import DiscoverContainer from './discover/discover_component';
import PodcastShowContainer from './podcasts/podcast_show_container';
import { Route, Switch, Link, HashRouter } from 'react-router-dom';

const Listen = (props) => {
  console.log("HERE");
  return (
    <section className="listen">
      <NavbarContainer />
      <div className="container">
        <Switch>
          <Route path="/podcasts/:podcastId" component={PodcastShowContainer} />
          <Route path="/podcasts" component={DiscoverContainer} />
        </Switch>
      </div>
    </section>
  );
};

function mapStateToProps({ session }) {
  return {
    loggedIn: Boolean(session.currentUser),
    errors: session.errors
  }
};

export default connect(mapStateToProps)(Listen);
