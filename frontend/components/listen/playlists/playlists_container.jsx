import React from 'react';
import {connect} from 'react-redux';

class PlaylistsContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <h2>Playlists Container</h2>;
  }
}

export default connect(null, null)(PlaylistsContainer);
