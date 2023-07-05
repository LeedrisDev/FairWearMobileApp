import * as React from 'react';
import globe from '../../assets/globe.png';
import shirt from '../../assets/shirt.jpeg';

import '../../App.css';
import './Image.css';

interface IImageProps {
  image : string,
}

function ImageComponent({ image } : IImageProps) {
  return (
    <div className="ImageComponent">
      <div className="brand-item">
        <img src={image} className="brand-image" alt="Item" />
      </div>
    </div>
  );
}

export default ImageComponent;
