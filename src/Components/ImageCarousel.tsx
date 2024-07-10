import React from 'react'; 
import './ImageCarousel.css'; 

interface ImageCarouselProps {
  images: string[]; 
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  return (
    <div className="carousel">
      {images.map((image, index) => (
        <div key={index} className="carousel-image">
          <img src={image} alt={`Wallpaper ${index}`} /> {}
        </div>
      ))}
    </div>
  );
};

export default ImageCarousel;
