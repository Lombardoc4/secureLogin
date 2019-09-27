import React from 'react';
import './jumbotron.css'

function Carousel(props) {
  return (
    <div id="img1" class="container carousel slide" data-ride="carousel">
      <div id="micros" class="carousel-inner">
        <div class="carousel-item active">
          {props.logo1}
        </div>
        <div class="carousel-item">
          {props.logo2}
        </div>
        <div class="carousel-item">
          {props.logo3}
        </div>
      </div>

      <a class="carousel-control-prev" href="#img1" data-slide="prev">
        <span class="carousel-control-prev-icon"></span>
      </a>
      <a class="carousel-control-next" href="#img1" data-slide="next">
        <span class="carousel-control-next-icon"></span>
      </a>
      <div class="main-text1 hidden-xs">
        <div class="col-md-12"  href="#micros" id='title'>
          <h1 class="display-4" >
          {props.head}
          </h1>
          <h4 id="micromore" class="display-6"> Learn more </h4>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
