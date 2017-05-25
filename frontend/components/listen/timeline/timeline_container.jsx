import React from 'react';
import {connect} from 'react-redux';

class TimelineContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <h2>Timeline Container</h2>;
  }
}

export default connect(null, null)(TimelineContainer);
