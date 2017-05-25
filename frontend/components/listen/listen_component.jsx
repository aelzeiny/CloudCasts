import React from 'react';
import {connect} from 'react-redux';
import { Route, Switch, Link, HashRouter } from 'react-router-dom';

import NavbarContainer from '../navbar/navbar_container';
import PlayerContainer from './player/player_container';

import DiscoverContainer from './discover/discover_component';
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
          <Route path="/podcasts/:podcastId" component={PodcastShowContainer} />
          <Route path="/podcasts" component={DiscoverContainer} />
          <Route path="/subscriptions" component={SubscriptionsContainer} />
          <Route path="/timeline" component={TimelineContainer} />
          <Route path="/playlists" component={PlaylistsContainer} />
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
