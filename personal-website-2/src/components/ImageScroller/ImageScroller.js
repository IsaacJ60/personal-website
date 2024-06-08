// src/ImageScroller.js
import React from 'react';
import './ImageScroller.css';

const images = [
  'images\\isaac\\Screenshot 2024-06-07 151734.png',
  'images\\isaac\\IMG_5059.jpeg',
  'images\\isaac\\PXL_20240603_000936528.jpg',
  'images\\isaac\\PXL_20240602_015935587.MP.jpg',
  // Add more image URLs as needed
];

const ImageScroller = () => {
    return (
      <div className="scroller-container">
        <div className="scroller">
          {images.map((image, index) => (
            <img key={index} src={image} alt={`${index}`} className={`bobble bobble-${index % 5}`} />
          ))}
        </div>
      </div>
    );
  };
  
  export default ImageScroller;
