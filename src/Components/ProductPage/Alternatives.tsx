import product1 from '../../assets/produit1.png';
import * as React from 'react';

import './Alternatives.css';

function Alternatives() {
  return (
    <div className="score">
      <div>Alternatives</div>
      <div className="clothes">
        <div className="clothing-item">
          <img src={product1} className="item-image" alt="" />
          <div className="brand-and-grade title-four">
            <span>Shirt</span>
          </div>
        </div>
        <div className="clothing-item">
          <img src={product1} className="item-image" alt="" />
          <div className="brand-and-grade title-four">
            <span>Shirt</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Alternatives;
