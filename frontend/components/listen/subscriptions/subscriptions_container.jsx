import React from 'react';
import {connect} from 'react-redux';
import {receivePodcasts} from '../../../actions/search_actions';
import PodcastGridContainer from '../podcasts/podcast_grid_container';

class SubscriptionsContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props.subscriptions);
    this.props.setGrid(this.props.subscriptions);
  }
  render() {
    return (
      <article className="subscriptions container">
        <PodcastGridContainer />
      </article>
    );
  }
}

function mapStateToProps(state) {
  return {
    subscriptions: state.subscriptions
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setGrid: (podcasts) => {
      dispatch(receivePodcasts(podcasts));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SubscriptionsContainer);
