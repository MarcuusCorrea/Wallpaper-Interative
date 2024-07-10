import React, { useState } from 'react';
import './Carousel.css';

interface CarouselProps {
  images: string[];
}

interface IImagemCarousel {
  key:number,
  image:string,
  index:number,
  classname:string;
}
  
function ImagemCarousel(props:IImagemCarousel) {
  return (
    <img
      key={props.index}
      src={props.image}
      alt={`Carousel Image ${props.index}`}
      className={props.classname}
    />
  )
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % images.length;
      return newIndex < 0 ? images.length - 1 : newIndex;
    });
  };
  
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      return newIndex < 0 ? images.length - 1 : newIndex;
    });
  };

  return (
    <div className="carousel-container">
      <div className="carousel">
        <div 
          style={{ 
            display:'flex', 
            flexDirection:'row', 
            background:'#3D3D3D',
            alignItems:'center',
            justifyContent:'space-between',
            width:'100%',
          }}>

          <img key={2000} src={images[currentImageIndex-1]} style={styles[0]} />

          {images.map((image, index) => (
              <ImagemCarousel 
                key={index}
                image={image}
                index={index}
                classname={index === currentImageIndex ? 'carousel-image active' : 'carousel-image'}
              />
          ))}

          
          <img key={2001} src={images[currentImageIndex+1]} style={styles[0]}  />
          
        </div>

        <div className="carousel-controls">
          <button onClick={prevImage} className="control-btn">
            ANTERIOR
          </button>
          <button onClick={nextImage} className="control-btn">
            PRÓXIMO
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = [
  {
    maxHeight:'200px', width:'auto', margin:'20px'
  }
]

export default Carousel;
