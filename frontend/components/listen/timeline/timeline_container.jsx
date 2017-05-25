import React from 'react';
import {connect} from 'react-redux';
import {timeline} from '../../../util/podcast_api_utils';
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
      <p>{JSON.stringify(timeline)}</p>
    );
  }
}

function mapStateToProps(state) {
  return {
    subscriptions: subscriptionsSelector(state.subscriptions)
  };
}

export default connect(mapStateToProps, null)(TimelineContainer);
