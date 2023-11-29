import * as React from 'react';
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
      <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />
      {
        Array.from({ length: 5 }, (_, i) => {
          if (i < score) {
            return (
              <div key={i}>
                <i className="bx bx-world colored-icon-home" />
              </div>
            );
          }

          return (
            <div key={i}>
              <i className="bx bx-world uncolored-icon-home" />
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
    <div className="header">
      <img src={photo} className="item-image-topbrand" alt="product" />
      <div className="title-one">{name}</div>
      <div style={{ fontSize: 13 }}>
        &quot;
        {theme}
        &quot;
      </div>
      <Score globalScore={globalScore} />
    </div>
  );
}

function TopBrandPage() {
  const { productId } = useParams();
  const brand = topBrands[Number(productId)];

  return (
    <div className="brandPage">
      <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />
      <div>
        <button className="back-product-page" type="button" aria-label="Back to Previous Page">
          <Link className="nav-link" to="/Home">
            <i className="bx bx-left-arrow-alt" />
          </Link>
        </button>
        <div className="brand-content">
          <GlobalInformationsBrand globalBrandInformations={brand} />

          <div className="brand-description">
            {brand.description}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBrandPage;
