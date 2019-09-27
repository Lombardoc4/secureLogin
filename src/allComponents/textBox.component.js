import React from 'react';
import './textBox.css';

function TextBox(props) {
  // make this into different text boxes for different sizes and positions

  return (
    <div class="container">
      <h3 className="{props.class}">{props.value}</h3>
    </div>
  );
}

export default TextBox;
