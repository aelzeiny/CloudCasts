import React from 'react';
import {connect} from 'react-redux';

import TimelineItemComponent from './timeline_item';

import {timeline} from '../../../util/podcast_api_utils';
import { receiveEpisode } from '../../../actions/podcast_actions';
import {subscriptionsSelector} from '../../../reducers/selectors';

class TimelineContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeline: [],
      loading: true
    };
  }

  componentDidMount() {
    this.queryTimeline(this.props.subscriptions);
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.subscriptions.length !== nextProps.subscriptions.length) {
      this.setState({loading: true});
      this.queryTimeline(nextProps.subscriptions);
    }
  }

  onPlay(episode) {
    console.log(episode);
    this.props.playEpisode(episode, episode.podcast);
  }

  queryTimeline(subs) {
    if(subs.length === 0)
      return;
    timeline(subs.map(el => el.podcast_id)).then(
      data => {
        console.log(data);
        this.setState({loading: false, timeline: data});
      }, err => console.log(err.responseText)
    );
  }

  render() {
    if(this.state.loading)
      return (
        <i className="fa fa-spin fa-spinner fa-6"></i>
      );
      return (
        <div>
        {
          this.state.timeline.map((episode, idx) => (
            <TimelineItemComponent episode={episode} idx={idx}
              onPlay={this.onPlay.bind(this)} key={"item-"+idx} />
          ))
        }
        </div>
      );
  }
}

function mapStateToProps(state) {
  return {
    subscriptions: subscriptionsSelector(state.subscriptions)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    playEpisode: (episode, podcast) => {
      return dispatch(receiveEpisode(episode, podcast));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TimelineContainer);
