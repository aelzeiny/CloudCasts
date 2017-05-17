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
    return <img src="http://lorempixel.com/800/600/cats"></img>;
  }
}

export default HeroComponent;
