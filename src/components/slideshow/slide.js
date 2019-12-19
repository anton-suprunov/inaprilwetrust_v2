import React, { Component } from 'react';

class Slide extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    if (this.props.active === true) {
      this.initSliding();
    }
  }

  componentDidUpdate(oldProps) {
    oldProps.active && this.cancelSliding();
    if (this.props.active === true && !oldProps.active) {
      this.initSliding();
    }
  }

  initSliding = () => {
    console.log('init sliding');
    let h = this.slide.offsetHeight;
    let pos = 0;

    this.slidingInterval = setInterval(() => {
      pos = pos + h;

      if (pos >= (h * this.props.frames.length)) {
        pos = 0;
      }
      this.slideInner.style.transform = `translateY(-${pos}px)`;
    }, 1000);
  };

  cancelSliding = () => {
    console.log('cancel sliding');
    clearInterval(this.slidingInterval);
  };

  render() {
    const { frames } = this.props;
    return (
      <div className="slideshow-slide" ref={el => this.slide = el}>
        <div className="slideshow-slide-inner" ref={el => this.slideInner = el}>
          {frames.map((frame, i) => (
            <div className="slideshow-frame" key={i}>
              <img src={`${process.env.PUBLIC_URL}/pics/rubinsteina/${frame}`} className="slideshow-img" />
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default Slide;