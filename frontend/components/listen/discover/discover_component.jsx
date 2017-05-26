import React from 'react';
import SearchFilterContainer from './search_filter_container';
import PodcastGridContainer from '../podcasts/podcast_grid_container';
import {requestTopPodcasts} from '../../../actions/search_actions';
import {connect} from 'react-redux';

class DiscoverComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestTopPodcasts();
  }

  render() {
    return (
      <article className="discover">
        <SearchFilterContainer />
        <div className="container">
          <PodcastGridContainer />
        </div>
      </article>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return {
    requestTopPodcasts: () => dispatch(requestTopPodcasts())
  };
}

export default connect(null, mapDispatchToProps)(DiscoverComponent);
