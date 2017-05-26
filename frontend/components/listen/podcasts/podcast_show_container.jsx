import React from 'react';
import {connect} from 'react-redux';
import {
  showPodcast,
  receiveEpisode
} from '../../../actions/podcast_actions';
import {
  subscribeToPodcast,
  unsubscribeFromPodcast
} from '../../../actions/subscription_actions';

import {getLightestAndDarketFromPallet} from '../../../util/color_util';

import isEmpty from 'lodash/isEmpty';
import EpisodeItemComponent from './episode_item_component';
import * as Vibrant from 'node-vibrant';
var HtmlToReactParser = require('html-to-react').Parser;

const NULL_PALLET = {
  light: 'lightgray',
  dark: 'black'
};

const SCROLL_SHOW = 12;

class PodcastShowComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      pallet: NULL_PALLET,
      scrollCount: 1,
      scrollLoading: false
    };
    this.parser = new HtmlToReactParser();
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    this.beginPodcastLoad();
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
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

  handleScroll() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight
      && SCROLL_SHOW * this.state.scrollCount < this.props.podcast.episodes.length) {
      this.setState({scrollLoading: true});
      setTimeout(() => this.setState({
        scrollLoading: false,
        scrollCount: this.state.scrollCount+1
      }), 1000);
    }
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

  onSubscibeClick() {
    const podId = this.props.podcast.itunes_id;
    if(this.props.subscriptions[podId]) {
      this.props.unsubscribeFrom(this.props.subscriptions[podId].id);
    } else {
      this.props.subscribeTo(podId);
    }
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
          <img src={pod.image_url}></img>
          <div className="subscription-viewport">
            {this._renderSubscriptionIcon()}
          </div>
        </div>
        <div className="episodes container">
          <div id="accordion" role="tablist" aria-multiselectable="true">
            {pod.episodes.slice(0, SCROLL_SHOW*this.state.scrollCount).map((ep, idx) => (
              <EpisodeItemComponent parse={this.parser.parse} episode={ep} idx={idx} key={"ep-" + ep.published + idx} onPlay={this.onPlay.bind(this)}/>
            ))}
          </div>
        </div>
        {this._renderScrollLoadingIcon()}
      </section>
    );
  }

  _renderScrollLoadingIcon() {
    if(this.state.scrollLoading)
      return <i className="scroll-loading fa fa-spin fa-6 fa-spinner"></i>;
    return null;
  }

  _renderSubscriptionIcon() {
    if(!this.props.subscriptions[this.props.podcast.itunes_id]){
      return (<button className="reset" onClick={this.onSubscibeClick.bind(this)}>
        <i className="fa fa-plus-circle visible"></i>
         <b className="visible">Subscribe</b>
      </button>);
    }
    return (
      <button className="reset" onClick={this.onSubscibeClick.bind(this)}>
        <i className="fa fa-check-circle visible-green"></i>
        <b className="visible-green">Subscribed</b>
      </button>);
  }
}

function mapStateToProps(state, {match}) {
  return {
    podcast: state.podcast,
    subscriptions: state.subscriptions
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadPodcast: (id) => {
      return dispatch(showPodcast(id));
    },
    playEpisode: (episode, podcast) => {
      return dispatch(receiveEpisode(episode, podcast));
    },
    subscribeTo: (podId) => {
      return dispatch(subscribeToPodcast(podId));
    },
    unsubscribeFrom: (subId) => {
      return dispatch(unsubscribeFromPodcast(subId));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PodcastShowComponent);
