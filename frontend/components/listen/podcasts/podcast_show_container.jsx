import React from 'react';
import {connect} from 'react-redux';
import {
  subscribeToPodcast,
  unsubscribeFromPodcast,
  showPodcast,
  receiveEpisode
} from '../../../actions/podcast_actions';

import {getLightestAndDarketFromPallet} from '../../../util/color_util';

import isEmpty from 'lodash/isEmpty';
import EpisodeItemComponent from './episode_item_component';
import * as Vibrant from 'node-vibrant';
var HtmlToReactParser = require('html-to-react').Parser;

const NULL_PALLET = {
  light: 'lightgray',
  dark: 'black'
};

class PodcastShowComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      pallet: NULL_PALLET
    };
    this.parser = new HtmlToReactParser();
  }

  componentDidMount() {
    this.beginPodcastLoad();
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.match.params.podcastId != nextProps.match.params.podcastId) {
      this.setState({
        loading: true,
        pallet: NULL_PALLET
      });
      this.beginPodcastLoad();
    }
  }

  beginPodcastLoad() {
    $(this).scrollTop(0);
    this.props.loadPodcast(this.props.match.params.podcastId).then(() => {
      this.setState({loading: false});
    });
  }
  onImgLoad(e) {
    const img = e.currentTarget;

    Vibrant.from(img).getPalette((err,pal) => {
      if(pal) {
        // Set State
        let contrast = getLightestAndDarketFromPallet(pal);
        this.setState({pallet: {
          light: contrast[0],
          dark: contrast[1]
        }});
      }
    });
  }

  onPlay(episode) {
    this.props.playEpisode(episode, this.props.podcast);
  }

  render() {
    const pod = this.props.podcast;
    // this.setConstrast.Color(this.props.md_image_url);
    if(this.state.loading || isEmpty(pod)) {
      return (
        <section className="podcast-show">
          <i className="fa fa-6 fa-spin fa-circle-o-notch" style={{fontSize: '10em'}}></i>
        </section>
      );
    }
    return(
      <section className="podcast-show">
        <img crossOrigin="anonymous" src={pod.md_image_url} id="podImg" onLoad={this.onImgLoad.bind(this)}></img>
        <div className="episode-viewport" style={{backgroundColor: this.state.pallet.dark}}>
          <figcaption style={{backgroundImage: `url(${pod.image_url})`}}></figcaption>
          <div className="subscription-viewport">
            <button className="reset">
              <i className="fa fa-plus-circle visible"></i>
              <b className="visible">Subscribe</b>
            </button>
          </div>
        </div>
        <div className="episodes container">
          <div id="accordion" role="tablist" aria-multiselectable="true">
            {pod.episodes.map((ep, idx) => (
              <EpisodeItemComponent parse={this.parser.parse} episode={ep} idx={idx} key={"ep-" + ep.published + idx} onPlay={this.onPlay.bind(this)}/>
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
      return dispatch(showPodcast(id));
    },
    playEpisode: (episode, podcast) => {
      return dispatch(receiveEpisode(episode, podcast));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PodcastShowComponent);
