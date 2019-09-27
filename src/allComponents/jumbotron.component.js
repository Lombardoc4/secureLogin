import React from 'react';
import './jumbotron.css';
import logo from "../imgs/logoSmall.png"
import TextBox from './textBox.component.js';

function Jumbotron() {
  return (
    <div class="full">
      <div class='row no-gutters' href="#">
        <div class="col-lg-3 img">
          <img class="img-fluid" atl="..." src={logo}/>
        </div>
        <div class="col-lg-9 title">
            <h1 class="display-6" >Evolution Urban Grows</h1>
        </div>
      </div>
      <div class="general">
        <TextBox class='intro' value={'A forward thinking team helping the people and our ecosystem rejuvenate their health. We are your source for locally grown, fresh microgreens. We establish pollinator gardens in your local communities. Feeding those small as bees to those big as Shaq, from microgreens to evergreens, we are Evolution Urban Grows!'} />
      </div>
    </div>
  );
}

export default Jumbotron;
