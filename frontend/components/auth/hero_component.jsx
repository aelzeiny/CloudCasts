import React from 'react';
import Welcome from './welcome/welcome';

class HeroComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.canvas = document.getElementById("welcome-canvas");

    this.welcome = new Welcome(window.innerWidth, window.innerHeight);
    const resize = () => {
      // RESIZE WELCOME SECTION
      this.canvas.width = window.innerWidth -25;
      this.canvas.height = window.innerHeight * 6/8;
    };
    resize();
    window.addEventListener("resize", resize);

    this.canvas.addEventListener("mouseenter", () => {
      this.welcome.mouseHover = true;
    });
    this.canvas.addEventListener("mouseout", () => {
      this.welcome.mouseHover = false;
    });

    this.welcome.start(this.canvas);
    this.canvas.addEventListener("mousemove", (e) => this.welcome.mouseMove(this.canvas.getBoundingClientRect(), e), true);
    this.canvas.addEventListener("mousedown", (e) => this.welcome.mouseMove(this.canvas.getBoundingClientRect(), e), true);
  }

  render() {
    return (
    <div className="hero-parallax">
      <canvas id="welcome-canvas" style={{"backgroundColor":"#fcc600"}}>

      </canvas>
    </div>);
  }
}

export default HeroComponent;
