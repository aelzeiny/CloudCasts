import React from 'react';
import {connect} from 'react-redux';


// TODO: WRITE ACTIONS FOR FETCHING EPISODES WHEN YOU GET HERE
class PodcastShowComponent extends React.Component {
  constructor(props) {
    // props includes the podcast
    super(props);
  }

  render() {

  }
}

function mapStateToProps(state) {
  return {

  };
}

function mapDispatchToProps(dispatch) {

}

export default connect(mapStateToProps, mapDispatchToProps)(PodcastShowComponent);
