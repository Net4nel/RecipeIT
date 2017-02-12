import React, { Component } from 'react'
import Slider from 'react-slick'

export default class SimpleSlider extends Component{

  render(){
    var settings = {
      dots: true,
      infinite: true,
      autoplay: true,
    //   centerMode: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
return (
      <Slider {...settings}>
        <div><img src="http://media2.intoday.in/indiatoday/images/stories/dish6-story_647_122816023131.jpg" style={{height: 200, width: 500}}/></div>
        <div>2</div>
        <div>2</div>
        <div>2</div>
        <div>2</div>
        <div>2</div>
      </Slider>
        );
    }
 }
    
