import React from 'react';
import {connect} from 'react-redux';
import {receivePodcasts} from '../../../actions/search_actions';
import {fetchSubscriptions} from '../../../actions/podcast_actions';
import {subscriptionsSelector} from '../../../reducers/selectors';
import PodcastGridContainer from '../podcasts/podcast_grid_container';

class SubscriptionsContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this._setGrid(this.props.subscriptions);
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.subscriptions.length !== nextProps.subscriptions.length)
      this._setGrid(nextProps.subscriptions);
  }

  _setGrid(subs) {
    this.props.setGrid(subs.map((sub) => sub.podcast));
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
    subscriptions: subscriptionsSelector(state.subscriptions)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setGrid: (podcasts) => dispatch(receivePodcasts(podcasts))
  };
}

export default
  connect(mapStateToProps, mapDispatchToProps)(SubscriptionsContainer);
