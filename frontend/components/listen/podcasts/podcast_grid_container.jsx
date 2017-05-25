import React from 'react';
import {connect} from 'react-redux';
import {podcastsSelector}from '../../../reducers/selectors';
import PodcastItemComponent from './podcast_item_component';

class PodcastGrid extends React.Component {
  constructor(props) {
    super(props);
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

export default connect(mapStateToProps, null)(PodcastGrid);
