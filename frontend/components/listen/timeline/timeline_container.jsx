import React from 'react';
import {connect} from 'react-redux';

import TimelineItemComponent from './timeline_item';

import {timeline} from '../../../util/podcast_api_utils';
import { receiveEpisode } from '../../../actions/podcast_actions';
import {subscriptionsSelector} from '../../../reducers/selectors';
import {monthNames, formatMMMDDYYYYDate} from '../../../util/date_util';

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
    this.props.playEpisode(episode, episode.podcast);
  }

  queryTimeline(subs) {
    if(subs.length === 0)
      return;
    timeline(subs.map(el => el.podcast_id)).then(
      data => {
        this.setState({loading: false, timeline: this.formatData(data)});
      }, err => console.log(err.responseText)
    );
  }

  formatData(data) {
    if(data.length === 0)
      return [];
    const answer = [];
    let currArr = [data[0]];
    for(let i=1;i<data.length;i++) {
      let curr = data[i];
      if(!this.dateEquals(data[i-1], curr)) {
        answer.push(currArr);
        currArr = [curr];
      } else {
        currArr.push(curr);
      }
    }
    return answer;
  }

  dateEquals(a, b) {
    const da = new Date(a.published);
    const db = new Date(b.published);
    return da.getFullYear() === db.getFullYear()
      && da.getMonth() === db.getMonth() && da.getDate() === db.getDate();
  }

  render() {
    if(this.state.loading)
      return (
        <i className="fa fa-spin fa-spinner fa-6"></i>
      );
      return (
        <div className="container">
        {
          this.state.timeline.map((dateGroup, idx) => (
            this._renderDateGroup(dateGroup, idx)
          ))
        }
        </div>
      );
  }

  _renderDateGroup(dateGroup, i) {
      return (
      <div className="date-group" key={"dgroup-"+i}>
        <div className="date-item">
          {formatMMMDDYYYYDate(new Date(dateGroup[0].published))}
        </div>
        {
          dateGroup.map((episode, idx) => (
            <TimelineItemComponent episode={episode} idx={`${i}-${idx}`}
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
