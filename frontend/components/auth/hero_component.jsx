import React from 'react';

class HeroComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div className="hero-parallax">
      <img src="SF.svg" alt="cool hero image" className="hero"></img>
    </div>);
  }
}

export default HeroComponent;
