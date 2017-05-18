import React from 'react';

class HeroComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.listener = window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener(this.listener);
  }

  handleScroll(evt) {
    const y = $(window).scrollTop();
  }

  render() {
    return (<div className="hero-parallax">
      {/* <img src="Layer 0.svg" alt="cool hero image" className="hero"></img>
      <img src="Layer 1.svg" alt="cool hero image" className="hero"></img>
      <img src="Layer 2.svg" alt="cool hero image" className="hero"></img>
      <img src="Layer 3.svg" alt="cool hero image" className="hero"></img>
      <img src="Layer 4.svg" alt="cool hero image" className="hero"></img>
      <img src="Layer 5.svg" alt="cool hero image" className="hero"></img>
      <img src="Layer 6.svg" alt="cool hero image" className="hero"></img> */}
      <img src="SF.svg" alt="cool hero image" className="hero"></img>
    </div>);
  }
}

export default HeroComponent;
