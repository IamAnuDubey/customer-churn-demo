
 import React, { useState } from "react";


const Demo = () => {
    const images =[
  "/images/IMG_1514.PNG",
   "/images/IMG_1515.PNG" ,
    "/images/IMG_1516.PNG",
    "/images/IMG_1517.PNG",
   "/images/IMG_1518.PNG" ,
    "/images/IMG_1519.PNG",
  ]; // Add your image paths here

  const [currentIndex, setCurrentIndex] = useState(0);

  const changeSlide = (direction) => {
    const totalSlides = images.length;
    setCurrentIndex((currentIndex + direction + totalSlides) % totalSlides);
  };

  return (
    <section id="demo" class="py-5 bg-light">
    <div className="image-slider">
      <button className="prev" onClick={() => changeSlide(-1)}>
        &#10094;
      </button>
      <div className="image-container">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={`slide ${index === currentIndex ? "active" : ""}`}
            style={{ display: index === currentIndex ? "block" : "none" }}
          />
        ))}
      </div>
      <button className="next" onClick={() => changeSlide(1)}>
        &#10095;
      </button>
    </div>
    </section>
  );
};

export default Demo;


