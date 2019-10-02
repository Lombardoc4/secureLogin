import React from 'react';
import secure from '../fortKnox.jpg';


export default function Home() {
  return (
    <div>
      <img src={secure} alt='...'/>
      <h1 style={{fontFamily: 'papyrus',fontSize: '50px'}}>
        Secure Login
      </h1>
    </div>
  );
};
