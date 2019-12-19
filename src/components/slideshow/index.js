import React, { Component } from 'react';
import Slider from "react-slick";

import Pics from '../rubinsteina';
import Slide from "./Slide";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./Slideshow.scss";

class Slideshow extends Component {
  constructor(props) {
    super(props);

    this.state = { activeSlide: 0 };
  }

  render() {
    return <div className="slideshow">
      <Slider
        dots={false}
        infinite={false}
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
        afterChange={activeSlide => this.setState({ activeSlide })}
      >
        {Pics.data.map((page, i) => (
          <div className="slideshow-page" key={i}>
            <Slide frames={page[0]} active={this.state.activeSlide === i} />
            <Slide frames={page[1]} active={this.state.activeSlide === i} />
          </div>
        ))}
      </Slider>
    </div>;
  }
}

export default Slideshow;