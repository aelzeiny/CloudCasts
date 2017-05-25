import React from 'react';
import {connect} from 'react-redux';
import {requestTopPodcasts} from '../../../actions/search_actions';
import {fetchSubscriptions} from '../../../actions/subscription_actions';
import {podcastsSelector}from '../../../reducers/selectors';
import PodcastItemComponent from './podcast_item_component';

class PodcastGrid extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestTopPodcasts();
    this.props.requestSubscriptions();
  }

  render() {
    return (
      <div className="pod-grid">
      {
        this.props.podcasts.map( pod => (
          <PodcastItemComponent pod={pod} key={`pod-list${pod.itunes_id}`} />
        ))
      }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    podcasts: podcastsSelector(state.podcasts)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    requestSubscriptions: () => dispatch(fetchSubscriptions()),
    requestTopPodcasts: () => dispatch(requestTopPodcasts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PodcastGrid);
