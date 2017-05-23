import React from 'react';
import {connect} from 'react-redux';

class PlayerContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.player.addEventListener('canplaythrough', () => {
      this.player.play();
    });
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.episode && this.props.episode.audio != nextProps.episode.audio) {
      this.player.load();
    }
  }

  render() {
    return (
      <footer className="player">
        <div className="container">
          <audio ref={(me) => this.player = me}>

            {/* <!-- Optional Source --> */}
            {this._getSrc()}

            {/* <!--Warning --> */}
            Your browser does not support our audio player
          </audio>
        </div>

        {/* <!-- Video Controls --> */}
        <div id="video-controls">
          <button type="button" id="play-pause">
            <i className="fa fa-play"></i>
          </button>
          <input type="range" id="seek-bar" value="0"/>
          <button type="button" id="mute">
            <i className="fa fa-pause"></i>
          </button>
          <input type="range" id="volume-bar" min="0" max="1" step="0.1" value="1"/>
        </div>
      </footer>
    );
  }

  _getSrc() {
    const ep = this.props.episode;
    if(!ep)
      return (<b></b>);
    return <source src={ep.audio} type={ep.audio_type}/>
  }
}

function mapStateToProps(state) {
  return {
    episode: state.episode
  };
}

export default connect(mapStateToProps, null)(PlayerContainer);
