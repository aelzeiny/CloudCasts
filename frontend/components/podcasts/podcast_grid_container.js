import React from 'react';
import {connect} from 'react-redux';
import {requestTopPodcasts} from '../../actions/search_actions';

class PodcastGrid extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestTopPodcasts();
  }

  render() {
    console.log(this.props);
    return (
      <ul className="list-group">
      {
        this.props.podcasts.map( pod => (
          <li className="list-group-item">{pod.name}</li>
        ))
      }
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    podcasts: state.podcasts
  };
}

function mapDispatchToProps(dispatch) {
  return {
    requestTopPodcasts: () => dispatch(requestTopPodcasts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PodcastGrid);
