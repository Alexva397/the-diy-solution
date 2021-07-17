import React from 'react';
import './hero.css';
import '../../../src/App.css';
// import video from '../../assets/videos/Nick_Offerman_TOH.mp4';
// import { Player } from 'video-react';

function Hero() {
  return (
    <div className='hero-container'>
      <video src='../../assets/videos/video-1.mp4' autoPlay loop muted/>
      {/* <video width="1500" controls>
        <source src='../../assets/videos/video-1.mp4' type="video/mp4"></source>
      </video> */}
      {/* <Player>
      <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
    </Player> */}
      <h1>Your All-in-One Home Project Management Solution</h1>
      <h3>Save Money. Improve Value. Get Organized.</h3>
      <p>Easy to use smart applications, content and data to manage your home
          for insurance, maintenance, remodeling, and financial purposes. It is
          time to manage your largest asset!</p>
    </div>
  );
}

export default Hero;
