import React from 'react'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const carousel = ({carousels}) => {
  return (
    <Carousel
          showThumbs={false}
          autoPlay
          useKeyboardArrows
          infiniteLoop
          showStatus={false}
          className="carousel"
        >
          {carousels.data.attributes.Images.data.map((carousel) => (
            <div className="slide">
              <img
                alt="sample"
                src={`http://localhost:1337${carousel.attributes.url}`}
                key={carousel.attributes.id}
              />
            </div>
          ))}
        </Carousel>
  )
}

export default carousel