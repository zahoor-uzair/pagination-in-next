import React, { useState, useEffect } from "react";

interface Slide {
  src: string;
  title: string;
  desc: string;
}

interface CarouselSliderProps {
  slides: Slide[];
  style?: React.CSSProperties;
}

const CarouselSlider: React.FC<CarouselSliderProps> = ({ slides, style }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="carousel-slider">
      <button className="next-prev prev" onClick={prevSlide}>
        &lt;
      </button>
      <div style={style} className="slide-container">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={index === currentSlide ? "slide active" : "slide"}
          >
            <img src={slide.src} alt={`Slide ${index}`} />
            <h1 className="slide-title">{slide.title}</h1>
            <h4 className="slide-desc">{slide.desc}</h4>
          </div>
        ))}
      </div>
      <button className="next-prev next" onClick={nextSlide}>
        &gt;
      </button>
    </div>
  );
};

export default CarouselSlider;
