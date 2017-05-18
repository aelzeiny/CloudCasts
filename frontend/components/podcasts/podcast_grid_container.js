import React from 'react';
import {connect} from 'react-redux';
import {requestTopPodcasts} from '../../actions/search_actions';
import {podcastsSelector}from '../../reducers/selectors';
import {Link} from 'react-router-dom';

class PodcastGrid extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestTopPodcasts();
  }

  render() {
    return (
      <ul className="list-group">
      {
        this.props.podcasts.map( pod => (
          <li className="list-group-item" key={`pod-list${pod.itunes_id}`}>
            <Link to={`/podcasts/${pod.itunes_id}`}>
              {pod.name}
            </Link>
          </li>
        ))
      }
      </ul>
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
    requestTopPodcasts: () => dispatch(requestTopPodcasts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PodcastGrid);
