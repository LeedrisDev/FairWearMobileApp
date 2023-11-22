import * as React from 'react';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import vinted from '../../assets/images/glove.jpeg';

import './Alternatives.css';
import { IAlternativeProduct } from '../../Tests/InterfaceProduct';

interface IAlternativesProps {
  alternatives: IAlternativeProduct[]
}

function Alternatives({ alternatives }: IAlternativesProps) {
  return (
    <div className="alternatives" style={{ width: window.innerWidth, height: window.innerHeight }}>
      <div className="alternatives-box">
        <button className="back-product-page" type="button" aria-label="Back to Previous Page">
          <Link className="nav-link" to="/">
            <FontAwesomeIcon icon={faArrowLeft} className="icon-navigation" />
          </Link>
        </button>
        <div className="title-list-image">Alternatives</div>
        <div className="clothes-alternatives">
          {
            Array.from(alternatives).map((alternative) => (
              <a href={alternative.link} className="clothing-item-alternatives">
                <img src={vinted} className="item-image-alternatives" alt="" />
                <div className="brand-and-grade1 title-four">
                  <span>{alternative.name}</span>
                </div>
              </a>
            ))
                    }
        </div>
      </div>
    </div>
  );
}

export default Alternatives;
