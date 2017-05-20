import React from 'react';
import Welcome from './welcome/welcome';

class HeroComponent extends React.Component {
  constructor(props) {
    super(props);
    this.listeners = [];
    this.welcome = new Welcome(window.innerWidth, window.innerHeight);
  }

  componentDidMount() {
    this.canvas = document.getElementById("welcome-canvas");

    const resize = () => {
      // RESIZE WELCOME SECTION
      this.canvas.width = window.innerWidth - 25;
      this.canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);
    this.welcome.start(this.canvas);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", resize);
    this.canvas.removeEventListener("mouseenter", this.mouseenter);
    this.canvas.removeEventListener("mouseout", this.mouseout);
    this.canvas.removeEventListener("mousemove", this.mousemove, true);
    this.canvas.removeEventListener("mousedown", this.mousemove, true);
    this.welcome.end();
  }

  mouseenter() {
    this.welcome.mouseHover = true;
  }

  mouseout() {
    this.welcome.mouseHover = false;
  }

  mousemove(e) {
    this.welcome.mouseMove(this.canvas.getBoundingClientRect(), e);
  }

  render() {
    return (<canvas id="welcome-canvas" className={"hero " + this.props.className}></canvas>);
  }
}

export default HeroComponent;
