// React Imports 
// =========================================================   
import React from 'react';
// NPM Imports 
// =========================================================   
  import { Carousel } from "react-responsive-carousel";
// Import Media
// =========================================================   
import backyardBA from "../../assets/images/backyardBA.jpeg";
import bathroomBA from "../../assets/images/bathroomBA.jpeg";
import beforeAfter from "../../assets/images/beforeAfter.jpeg";

// Carousel 
// =========================================================   
export default() => (
  <Carousel
    autoPlay
    //infiniteLoop
    showThumbs={false}
    showStatus={false}
    swipeable={true}
  >
    <div>
      <img alt="before and after" src={backyardBA} />
      {/* <p className="legend">Legend 1</p> */}
    </div>
    <div>
      <img alt="before and after" src={bathroomBA} />
      {/* <p className="legend">Legend 2</p> */}
    </div>
    <div>
      <img alt="before and after" src={beforeAfter} />
      {/* <p className="legend">Legend 3</p> */}
    </div>
  </Carousel>
);
