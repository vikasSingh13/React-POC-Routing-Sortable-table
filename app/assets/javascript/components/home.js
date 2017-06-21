import React, { Component } from 'react';
import Carousel from './carousel/imageCarousel'

class home extends Component {
  render() {
    return (
      <div className="container-fluid fluid-wrap">
        <Carousel />
      </div>
    );
  }
}

export default home;
