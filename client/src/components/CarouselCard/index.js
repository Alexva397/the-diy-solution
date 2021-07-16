// React Imports 
// =========================================================   
import React from 'react';
// NPM Imports 
// =========================================================   
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// Import Media
// =========================================================   
import backyardBA from "../../assets/images/backyardBA.jpeg";
import bathroomBA from "../../assets/images/bathroomBA.jpeg";
import beforeAfter from "../../assets/images/beforeAfter.jpeg";
​
​
const imagesArray = [
  {
    alt: "before and after",
    img: backyardBA,
  },
  {
    alt: "before and after",
    img: bathroomBA,
  },
  {
    alt: "before and after",
    img: beforeAfter,
  },
]
// Carousel 
// =========================================================   
export default function CarouselCard() {
  return (
    <Carousel
      // autoPlay
      showArrows={true}
      //infiniteLoop
      showThumbs={false}
      centerMode={true}
      dynamicHeight={true}
    // showStatus={false}
    // swipeable={true}
    >
      {imagesArray.map((image, i) => {
        return (
          <div key={i}>
            <p>{image.alt}</p>
            <img alt={image.alt} src={image.img} />
          </div>
        )
      })}
      {/* <div> */}
      {/* <img alt="before and after" src={backyardBA} /> */}
      {/* <p className="legend">Legend 1</p> */}
      {/* </div> */}
      {/* <div> */}
      {/* <img alt="before and after" src={bathroomBA} /> */}
      {/* <p className="legend">Legend 2</p> */}
      {/* </div> */}
      {/* <div> */}
      {/* <img alt="before and after" src={beforeAfter} /> */}
      {/* <p className="legend">Legend 3</p> */}
      {/* </div> */}
    </Carousel>
  )
}