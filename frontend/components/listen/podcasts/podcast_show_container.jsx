import React from 'react';
import {connect} from 'react-redux';
import {subscribeToPodcast, unsubscribeFromPodcast, showPodcast} from '../../../actions/podcast_actions';
import isEmpty from 'lodash/isEmpty';
import EpisodeItemComponent from './episode_item_component';
import * as Vibrant from 'node-vibrant';

class PodcastShowComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vibrant: "white"
    };
  }

  componentDidMount() {
   $(this).scrollTop(0);
    this.props.loadPodcast(this.props.match.params.podcastId);
    // this.setConstrastColor(this.props.podcast.md_image_url);
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.match.params.podcastId != nextProps.match.params.podcastId){
      this.props.loadPodcast(nextProps.match.params.podcastId);
      // this.setConstrastColor(nextProps.podcast.md_image_url);
    }
  }
  //
  // setConstrastColor(url) {
  //   let palette;
  //   var img = new Image();
  //   img.onLoad = () => {
  //     Vibrant.from(img)
  //     .getPalette(function(err, pal){
  //       console.log(err);
  //       console.log(palette);;
  //     });
  //   };
  //   img.src = url;
  //     /*
  //     * Vibrant #7a4426
  //    * Muted #7b9eae
  //    * DarkVibrant #348945
  //    * DarkMuted #141414
  //    * LightVibrant #f3ccb4*/
  //   // this.setState({
  //   //   Vibrant: vibrant.vi
  //   // })
  // }

  onPlay(episode) {
    console.log(episode);
  }

  render() {
    const pod = this.props.podcast;
    // this.setConstrast.Color(this.props.md_image_url);
    if(isEmpty(pod))
      return (
        <section className="podcast-show">
          <i className="fa fa-6 fa-spin fa-spinner"></i>
        </section>
      );
    return(
      <section className="podcast-show">
        <div className="episode-viewport">
          <figcaption style={{backgroundImage: `url(${pod.super_img})`}}>
            <img id="podImg" src={this.props.podcast.md_image_url}></img>
          </figcaption>
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
      return dispatch(showPodcast(id));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PodcastShowComponent);
