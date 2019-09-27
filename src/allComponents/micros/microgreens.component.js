import React from 'react';
import Carousel from './carousel.component.js'

import './jumbotron.css';

import micro1 from '../imgs/microgreens/micro1.jpg';
import micro2 from '../imgs/microgreens/micro2.jpg';
import micro3 from '../imgs/microgreens/micro3.jpeg';

function Microgreens() {
  return (
    <div class='container microgreen'>


        <Carousel
          head={'Microgreens'}
          logo1={<img src={micro1} class="rounded d-block w-100 mx-auto" alt="..."/>}
          logo2={<img src={micro2} class="rounded d-block w-100 mx-auto" alt="..."/>}
          logo3={<img src={micro3} class="rounded d-block w-100 mx-auto" alt="..."/>}
        />

        <div id="microInfo">
          <a id='product' class="btn btn-warning" role="button">
            Available Greens
          </a>
          <div class="container" id='product'>
            <div class="row">
              <div class="col-sm-4">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Kale</h5>
                    <img src="./imgs/microgreens/kale.jpeg" class="card-img" alt="Kale"/>
                  </div>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Broccoli</h5>
                    <img src="./imgs/microgreens/broccoli.jpg" class="card-img" alt="Broccoli"/>
                  </div>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Sunflower</h5>
                    <img src="./imgs/microgreens/sunflower.png" class="card-img" alt="Sunflower"/>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-sm-4">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Radish</h5>
                    <img src="./imgs/microgreens/radish.png" class="card-img" alt="radish"/>
                  </div>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Sweet Pea</h5>
                    <img src="./imgs/team/hector.jpeg" class="card-img" alt="Sweet Pea"/>
                  </div>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Cilantro</h5>
                    <img src="./imgs/team/cris.jpg" class="card-img" alt="Cliantro"/>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-sm-4">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Amaranth</h5>
                    <img src="./imgs/microgreens/amaranth.png" class="card-img" alt="Amaranth"/>
                  </div>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Red Cabbage</h5>
                    <img src="./imgs/microgreens/cabbage.jpg" class="card-img" alt="Genesis"/>
                  </div>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Genesis Salad</h5>
                    <img src="./imgs/team/alex.png" class="card-img" alt="Genesis"/>
                  </div>
                </div>
              </div>
            </div>
          <br/>
            <a class="btn btn-warning" id="product" role="button">Close
            </a>

        <p id="microInfo">
        <br/>
          The Evolution Urban Grows team has been growing and produced microgreens since October of 2018. We started out with just a handful of trays, a few organic varieties of seeds, and a small rack. As the warmth of spring '19 was approaching we doubled our microgreen production and Hector began growing his vegetables. We have experimented with an abundant of hydroponic methods even testing out automated systems.
        <br/>
          Broccoli, Cabbage, and Kale were the first organic microgreens to be grown. Slowly we added more seeds to our inventory, Amaranth and Radish. Eager to experiment more and more, we now grow  Sunnies (Sunflower), Sweet Pea, and Cilantro. We grow a handful of varieties at any time.
        </p>
      </div>

      </div>

    </div>
  );
}

export default Microgreens;
