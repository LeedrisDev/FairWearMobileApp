import * as React from 'react';
import globe from '../../assets/globe.png';
import shirt from '../../assets/shirt.jpeg';

import '../../App.css';
import './Image.css';

function Image() {
  return (
    <div className="App">
      <div className="clothing-item">
        <img src={shirt} className="item-image" alt="Item" />
        <div className="brand-and-grade title-four">
          <span>Shirt</span>
          <span className="fairscore">
            <img src={globe} width={15} alt="FairScore" />
            {' '}
            4
          </span>
        </div>
      </div>
    </div>
  );
}

export default Image;
