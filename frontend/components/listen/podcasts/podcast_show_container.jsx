import React from 'react';
import {connect} from 'react-redux';
import {subscribeToPodcast, unsubscribeFromPodcast, showPodcast} from '../../../actions/podcast_actions';
import isEmpty from 'lodash/isEmpty';
import EpisodeItemComponent from './episode_item_component';

class PodcastShowComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      constrastColor: "black"
    };
  }

  componentDidMount() {
    this.props.loadPodcast(this.props.match.params.podcastId)
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.match.params.podcastId != nextProps.match.params.podcastId)
      this.props.loadPodcast(nextProps.match.params.podcastId);
  }

  onPlay(episode) {
    console.log(episode);
  }
  render() {
    const pod = this.props.podcast;
    if(isEmpty(pod))
      return (
        <section className="podcast-show">
          <i className="fa fa-6 fa-spin fa-spinner"></i>
        </section>
      );
    return(
      <section className="podcast-show">
        <div className="episode-viewport">
          <img src={pod.super_img}></img>
          <canvas id="podcast-capture"></canvas>
        </div>
        <div className="episodes">
          <div id="accordion" role="tablist" aria-multiselectable="true">
            {pod.episodes.map((ep, idx) => (
              <EpisodeItemComponent episode={ep} idx={idx} key={"ep-" + ep.published} onPlay={this.onPlay}/>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

function mapStateToProps(state, {match}) {
  return {
    podcast: state.podcast,
    isSubscribed: match.params.podcastId in state.subscriptions
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadPodcast: (id) => {
      console.log("DISPATCH");
      return dispatch(showPodcast(id));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PodcastShowComponent);
