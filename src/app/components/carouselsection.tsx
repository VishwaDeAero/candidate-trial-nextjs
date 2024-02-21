import Flickity from 'flickity';
import { useEffect, useRef } from 'react';

const CarouselSection = () => {
  const flickityRef = useRef('');

  useEffect(() => {
    const flkty = new Flickity(flickityRef.current, {
      // Flickity options
      // For example, you can set the accessibility, auto-play, etc.
    });

    return () => {
      // Destroy Flickity instance when component unmounts
      flkty.destroy();
    };
  }, []);

  return (
    <div ref={flickityRef} className="carousel">
      <div className="carousel-cell">
        <img src="/image1.jpg" alt="Slide 1" />
        <h2>Title 1</h2>
        <p>Description 1</p>
        <button>Button 1</button>
      </div>
      <div className="carousel-cell">
        <img src="/image2.jpg" alt="Slide 2" />
        <h2>Title 2</h2>
        <p>Description 2</p>
        <button>Button 2</button>
      </div>
      {/* Add more slides as needed */}
    </div>
  );
};

export default CarouselSection;
