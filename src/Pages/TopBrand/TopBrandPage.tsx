import * as React from 'react';
import {
  faArrowLeft, faEarth,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useParams } from 'react-router-dom';
import topBrands, { ITopBrandInformations } from './constantes';
import { useState } from 'react';

import './TopBrandPage.css';

interface IScoreProps {
  globalScore: number
}

interface ITopBrandInformationsProps {
  globalBrandInformations: ITopBrandInformations
}

function Score({ globalScore }: IScoreProps) {
  const [score] = useState(globalScore);

  return (
    <div className="score-information-home">
      {
          Array.from({ length: 5 }, (_, i) => {
            if (i < score) {
              return (
                <div className="scoreIconBrand" key={i}>
                  <FontAwesomeIcon className="coloredIcon1-home" icon={faEarth} />
                </div>
              );
            }

            return (
              <div className="scoreIconBrand" key={i}>
                <FontAwesomeIcon className="not-colored-icon1-home" icon={faEarth} />
              </div>
            );
          })
        }
    </div>
  );
}
function GlobalInformationsBrand({ globalBrandInformations }: ITopBrandInformationsProps) {
  const [name] = useState(globalBrandInformations.name);
  const [globalScore] = useState(globalBrandInformations.globalScore);
  const [theme] = useState(globalBrandInformations.theme);
  const [photo] = useState(globalBrandInformations.image);

  return (
    <div className="global-information-brand">
      <div className="image-box2">
        <div className="image-box3">
          <img src={photo} className="item-image-topbrand" alt="product" />

          <div className="informations-box1">
            <p className="name1-home">{name}</p>
            <div>
              { theme }
            </div>

            <Score globalScore={globalScore} />
          </div>
        </div>
      </div>
    </div>
  );
}

function TopBrandPage() {
  const { productId } = useParams();
  const brand = topBrands[productId];

  return (
    <div className="brandPage" style={{ width: window.innerWidth, height: window.innerHeight }}>
      <div className="informations-brand">
        <button className="back-product-page" type="button">
          <Link className="nav-link" to="/Home">
            <FontAwesomeIcon icon={faArrowLeft} className="icon-navigation" />
          </Link>
        </button>

        <GlobalInformationsBrand globalBrandInformations={brand} />

        <div className="description-home-box">
          <div className="description-home">
            { brand.description }
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBrandPage;
