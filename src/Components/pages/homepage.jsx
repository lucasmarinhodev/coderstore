import React, { useState } from "react";

const images = ["https://via.placeholder.com/800x300?text=Image+1"];

function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="App">
      <main className="carousel">
        <button className="carousel-btn left" onClick={handlePrev}>
          &lt;
        </button>
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="carousel-image"
        />
        <button className="carousel-btn right" onClick={handleNext}>
          &gt;
        </button>
      </main>
    </div>
  );
}

export default HomePage;
