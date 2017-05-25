import React from 'react';
import {connect} from 'react-redux';
import { Route, Switch, Link, HashRouter } from 'react-router-dom';

import NavbarContainer from '../navbar/navbar_container';
import PlayerContainer from './player/player_container';

import DiscoverComponent from './discover/discover_component';
import PodcastShowContainer from './podcasts/podcast_show_container';
import SubscriptionsContainer from './subscriptions/subscriptions_container';
import TimelineContainer from './timeline/timeline_container';
import PlaylistsContainer from './playlists/playlists_container';

const Listen = (props) => {
  return (
    <section className="listen">
      <NavbarContainer />
      <article className="content">
        <Switch>
          <Route path="/podcasts/subscriptions" component={SubscriptionsContainer} />
          <Route path="/podcasts/timeline" component={TimelineContainer} />
          <Route path="/podcasts/playlists" component={PlaylistsContainer} />
          <Route path="/podcasts/:podcastId" component={PodcastShowContainer} />
          <Route path="/podcasts" component={DiscoverComponent} />
        </Switch>
        <PlayerContainer />
      </article>
    </section>
  );
};

function mapStateToProps({ session }) {
  return {
    loggedIn: Boolean(session.currentUser),
    errors: session.errors
  };
}

export default connect(mapStateToProps)(Listen);
