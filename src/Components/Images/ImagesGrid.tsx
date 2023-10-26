import * as React from 'react';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import product1 from '../../assets/images/produit1.png';

import './ImagesGrid.css';

function ImagesGrid() {
  return (
    <div className="alternatives" style={{ width: window.innerWidth, height: window.innerHeight }}>
      <div className="alternatives-box">
        <button className="back-product-page" type="button">
          <Link className="nav-link" to="/">
            <FontAwesomeIcon icon={faArrowLeft} className="icon-navigation" />
          </Link>
        </button>
        <div className="title-list-image">Alternatives</div>
        <div className="clothes-alternatives">
          {
                        Array.from({ length: 5 }, () => (
                          <div className="clothing-item-alternatives">
                            <img src={product1} className="item-image-alternatives" alt="" />
                            <div className="brand-and-grade1 title-four">
                              <span>Shirt</span>
                            </div>
                          </div>
                        ))
                    }
        </div>
      </div>
    </div>
  );
}

export default ImagesGrid;
