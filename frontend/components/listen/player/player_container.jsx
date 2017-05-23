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
          <audio ref={(me) => this.player = me} controls>
            {this._getSrc()}
            Your browser does not support our audio player
          </audio>
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
