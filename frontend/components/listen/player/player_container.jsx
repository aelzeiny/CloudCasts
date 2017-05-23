import React from 'react';
import {connect} from 'react-redux';

class PlayerContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const ep = this.props.episode;
    if(!ep) {
      return (
        <section className="">
        </section>
      );
    }
    return (
      <footer className="player">
        <div className="container">
          <audio controls>
            <source src={ep.audio} type={ep.audio_type}/>
            Your browser does not support the audio element.
          </audio>
        </div>
      </footer>
    );
  }
}

function mapStateToProps(state) {
  return {
    episode: state.episode
  };
}

export default connect(mapStateToProps, null)(PlayerContainer);
