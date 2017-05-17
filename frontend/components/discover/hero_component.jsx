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
    return <img src="SF.svg" alt="cool hero image" className="hero"></img>;
  }
}

export default HeroComponent;
