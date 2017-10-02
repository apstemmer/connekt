import React, { Component } from 'react';
var Slider = require('react-slick').default;

export class Carousel extends Component {
  render() {
    var settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };

    console.log('sli', this.props.children);
    return (
      <Slider {...settings}>
        {this.props.children}
      </Slider>
    );
  }
}

function SampleNextArrow(props) {
  const {className, style, onClick} = props
  return (
    <div
      className={className}
      style={{...style, display: 'block'}}
      onClick={onClick}
    ></div>
  );
}

function SamplePrevArrow(props) {
  const {className, style, onClick} = props
  return (
    <div
      className={className}
      style={{...style, display: 'block'}}
      onClick={onClick}
    ></div>
  );
}
