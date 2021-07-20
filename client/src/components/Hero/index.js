import React from 'react';
import './hero.css';
import '../../../src/App.css';
import Divider from '@material-ui/core/Divider';
// import video from '../../assets/videos/Nick_Offerman_TOH.mp4';
// import { Player } from 'video-react';

function Hero() {
  return (
    <div className='hero-container'>
      {/* <video src='../../assets/' autoPlay loop muted/> */}
      {/* <video width="1500" controls>
        <source src='../../assets/videos/video-1.mp4' type="video/mp4"></source>
      </video> */}
      {/* <Player> */}
      <source src={'https://clipchamp.com/watch/8dV9CUTocrZ'} autoPlay loop muted/>
      {/* </Player> */}
      <h1>Your All-in-One <br></br> Home Project <br></br> Management Solution</h1>
      <Divider />
      <h3>Save Money. Improve Value. Get Organized.</h3>
      <p>Easy to use management system for all your home projects. <br></br> Use it for insurance, maintenance, remodeling, and financial purposes. <br></br> It is time to manage your largest asset!</p>
    </div>
  );
}

export default Hero;