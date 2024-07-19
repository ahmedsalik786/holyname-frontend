import React from "react";
import Carousel from "react-bootstrap/Carousel";

function FacultyImageSlider() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          src="https://images.meesho.com/images/products/422293125/8pwgm.webp?width=360"
          className="object-cover w-full"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://images.meesho.com/images/products/422293125/8pwgm.webp?width=360"
          className="object-cover w-full"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://images.meesho.com/images/products/422293125/8pwgm.webp?width=360"
          className="object-cover w-full"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default FacultyImageSlider;
