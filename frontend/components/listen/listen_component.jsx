import React from 'react';
import {connect} from 'react-redux';
import { Route, Switch, Link, HashRouter } from 'react-router-dom';

import NavbarContainer from '../navbar/navbar_container';
import PlayerContainer from './player/player_container';

import DiscoverContainer from './discover/discover_component';
import PodcastShowContainer from './podcasts/podcast_show_container';
import SubscriptionsContainer from './podcasts/podcast_show_container';
import TimelineContainer from './podcasts/podcast_show_container';
import PlaylistContainer from './podcasts/podcast_show_container';

const Listen = (props) => {
  return (
    <section className="listen">
      <NavbarContainer />
      <article className="content">
        <Switch>
          <Route path="/podcasts/:podcastId" component={PodcastShowContainer} />
          <Route path="/podcasts" component={DiscoverContainer} />
          <Route path="/subscriptions" component={DiscoverContainer} />
          <Route path="/timeline" component={DiscoverContainer} />
          <Route path="/playlists" component={DiscoverContainer} />
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
