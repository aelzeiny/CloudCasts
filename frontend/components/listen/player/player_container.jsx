import React from 'react';
import {connect} from 'react-redux';
import * as Vibrant from 'node-vibrant';
import {getLightestAndDarketFromPallet} from '../../../util/color_util';

const STATE_LOADING = 'LOADING';
const STATE_PLAY = 'PLAY';
const STATE_PAUSE = 'PAUSE';
const STATE_LOUD = 'LOUD';
const STATE_MUTED = 'MUTED';

class PlayerContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      playerState: STATE_LOADING,
      volumeState: STATE_LOUD,
      pallet: {
        light: "#f2f2f2",
        dark: "black"
      }
    });
  }

  componentDidMount() {
    this.player.addEventListener('canplaythrough', () => {
      if(this.state.playerState === STATE_PAUSE)
        return;
      this.player.play();
      this.setState({
        playerState: STATE_PLAY
      });
      this.seekBar.value = 0;
    });

    this.player.addEventListener('timeupdate', () => {
      // Calculate the slider value
      var value = (100 / this.player.duration) * this.player.currentTime;

      // Update the slider value
      this.seekBar.value = value;
      this.updateCurrTime();
    });
  }

  updateCurrTime() {
    this.currTime.innerHTML = this.formatTime(this.player.currentTime);
  }

  formatTime(time) {
    time = Math.floor(time);
    const hours = Math.floor(time/3600);
    const min = Math.floor(time/60) % 60;
    const sec = time % 60;
    if(hours)
      return `${hours}:${this.formatNum(min)}:${this.formatNum(sec)}`;
    return `${min}:${this.formatNum(sec)}`;
  }

  formatNum(num) {
    return ("0" + num).slice(-2);
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.episode && this.props.episode.audio != nextProps.episode.audio) {
      this.player.load();
      this.setState({
        playerState: STATE_LOADING
      });
    }
  }

  togglePlay(e) {
    if(this.player.paused)
      this.playPlayer();
    else
      this.pausePlayer();
  }

  playPlayer() {
    this.player.play();
    this.updateCurrTime();
    this.setState({
      playerState: STATE_PLAY
    });
  }

  pausePlayer() {
    this.player.pause();
    this.updateCurrTime();
    this.setState({
      playerState: STATE_PAUSE
    });
  }

  toggleMute() {
    if (this.player.muted == false) {
      this.player.muted = true;
    } else {
      this.player.muted = false;
    }

    this.setState({
      volumeState: this.player.muted ? STATE_MUTED : STATE_LOUD
    });
  }

  seekerChange(e) {
    // Calculate the new time
    var time = this.player.duration * (e.currentTarget.value / 100);

    // Update the audio time
    this.player.currentTime = time;
    this.updateCurrTime();
  }

  volume(e) {
    const slider = e.currentTarget;
    this.player.volume = slider.value;
  }

  rewind(e) {
    this.player.currentTime = 0;
  }

  nextTrack(e) {
    // TODO: IMPLEMENT NEXT TRACK FEATURE
  }

  handleImageLoad(e) {
    const img = e.currentTarget;
    Vibrant.from(img).getPalette((err,pal) => {
      if(pal) {
        // Set State
        let contrast = getLightestAndDarketFromPallet(pal, .95);
        this.setState({pallet: {
          light: contrast[0],
          dark: contrast[1]
        }});
      }
    });
  }

  render() {
    return (
      <footer className="player" style={{backgroundColor: this.state.pallet.light}}>
        <div className="container">
          <audio ref={(me) => this.player = me}>

            {/* <!-- Optional Source --> */}
            {this._getSrc()}

            {/* <!--Warning --> */}
            Your browser does not support our audio player
          </audio>

          {/* <!-- Audio Controls --> */}
          <div id="player-controls">
            <div id="player-play-pause">
              <button className="reset" id="step-back" onClick={this.rewind.bind(this)} disabled={this.state.playerState === STATE_LOADING}>
                <i className="fa fa-step-backward"></i>
              </button>
              <button className="reset" id="play-pause" onClick={this.togglePlay.bind(this)} disabled={this.state.playerState === STATE_LOADING}>
                {this._renderPlayIcon()}
              </button>
              <button className="reset" id="step-forward" onClick={this.nextTrack.bind(this)} disabled={this.state.playerState === STATE_LOADING}>
                <i className="fa fa-step-forward"></i>
              </button>
            </div>
            <div id="player-time">
              <label id="curr-time" ref={(me) => this.currTime=me}>--:--</label>
              <input type="range" id="seek-bar" ref={(me) => this.seekBar = me}
                onMouseDown={this.pausePlayer.bind(this)} onMouseUp={this.playPlayer.bind(this)} onChange={this.seekerChange.bind(this)}/>
              <label id="final-time">{this.player && this.player.duration ? this.formatTime(this.player.duration) : '--:--'}</label>
            </div>
            <div id="player-click">
              <button className="reset" id="mute" onClick={this.toggleMute.bind(this)}>
                {this._renderVolumeIcon()}
              </button>
              {/* <input type="range" id="volume-bar" min="0" max="1" step="0.05" onChange={this.volume.bind(this)}/> */}
            </div>
            <div id="player-cast">
              {this._renderPodcastInfo()}
            </div>
          </div>
        </div>
      </footer>
    );
  }

  _renderPodcastInfo() {
    if(!this.props.episode)
      return <div></div>
    return (
      <div>
        <img crossOrigin="anonymous" src={this.props.episode.podcast.md_image_url} onLoad={this.handleImageLoad.bind(this)}></img>
        <p>{this.props.episode.title}</p>
      </div>
    );
  }
  _renderPlayIcon() {
    if(this.state.playerState === STATE_PLAY)
      return <i className="fa fa-pause"></i>
    else if(this.state.playerState === STATE_PAUSE)
      return <i className="fa fa-play"></i>
    return <i className="fa fa-circle-o-notch fa-spin"></i>
  }

  _renderVolumeIcon(){
    if(this.state.volumeState === STATE_LOUD)
      return <i className="fa fa-volume-up"></i>
    return <i className="fa fa-volume-off"></i>
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
