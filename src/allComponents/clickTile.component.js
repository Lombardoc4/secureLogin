import React from 'react';
import './clickTile.css'

function Tile(props){

  return (
    <div class='tile'>
      <img class='rounded' src={props.image} alt="..."/>
      <p class="cardInfo">{props.title}</p>
    </div>
  );
}

export default Tile;
