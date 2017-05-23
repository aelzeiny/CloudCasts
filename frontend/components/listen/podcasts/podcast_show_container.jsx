import React from 'react';
import {connect} from 'react-redux';
import {subscribeToPodcast, unsubscribeFromPodcast, showPodcast} from '../../../actions/podcast_actions';
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
    // this.setConstrastColor(this.props.podcast.md_image_url);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      loading: true,
      pallet: NULL_PALLET
    });
    if(this.props.match.params.podcastId != nextProps.match.params.podcastId)
      this.beginPodcastLoad();
  }

  beginPodcastLoad() {
    $(this).scrollTop(0);
    this.props.loadPodcast(this.props.match.params.podcastId).then(() => {
      var img = document.getElementById("podImg");
      Vibrant.from(img).getPalette((err,pal) => {
        window.pal = [err,pal];
        if(pal){
          // Set State
          let contrast = this.getLightestAndDarketFromPallet(pal);
          this.setState({pallet: {
            light: contrast[0],
            dark: contrast[1]
          }});
          window.contrast = contrast;
        }
        else if(err)
          console.log(err);
      });
    });
  }

  getLightestAndDarketFromPallet(pallet) {
    const keys = Object.keys(pallet);
    let maxPop = [0,0];
    let maxHex = ['gray', 'black'];
    for(let i=0;i<keys.length;i++){
      const key = keys[i];
      const val = pallet[key];
      if(val) {
        const lightOrDarkIndex = (key.includes("Light") || key === "Vibrant") ? 0 : 1;
        if(maxPop[lightOrDarkIndex] < val._population)
        {
          maxPop[lightOrDarkIndex] = val._population;
          maxHex[lightOrDarkIndex] = val.getHex();
        }
      }
    }
    return maxHex;
  }

  onPlay(episode) {
    console.log(episode);
  }

  render() {
    const pod = this.props.podcast;
    console.log(pod);
    // this.setConstrast.Color(this.props.md_image_url);
    if(isEmpty(pod))
      return (
        <section className="podcast-show">
          <i className="fa fa-6 fa-spin fa-spinner"></i>
        </section>
      );
    return(
      <section className="podcast-show">
        <div className="episode-viewport" style={{backgroundColor: this.state.pallet.light}}>
          <figcaption style={{backgroundImage: `url(${pod.image_url})`}}>
            <img id="podImg" src={this.props.podcast.md_image_url}></img>
          </figcaption>
        </div>
        <div className="episodes container">
          <div id="accordion" role="tablist" aria-multiselectable="true">
            {pod.episodes.map((ep, idx) => (
              <EpisodeItemComponent parse={this.parser.parse} episode={ep} idx={idx} key={"ep-" + ep.published + idx} onPlay={this.onPlay}/>
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
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PodcastShowComponent);
