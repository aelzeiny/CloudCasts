import React from 'react';
import {connect} from 'react-redux';
import DiscoverContainer from './discover/discover_component';
import PodcastShowContainer from './podcasts/podcast_show_container';
import PlayerContainer from './player/player_container';
import { Route, Switch, Link, HashRouter } from 'react-router-dom';

const Listen = (props) => {
  return (
    <section className="listen">
      <Switch>
        <Route path="/podcasts/:podcastId" component={PodcastShowContainer} />
        <Route path="/podcasts" component={DiscoverContainer} />
      </Switch>
      <PlayerContainer />
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
