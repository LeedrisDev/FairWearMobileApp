import * as React from 'react';
import { useEffect, useState } from 'react';
import { faArrowLeft, faEarth } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useParams } from 'react-router-dom';

import './BrandPage.css';
import { BrandByIdBusiness } from '../../Business/BrandBusiness';
import { BrandModel } from '../../Models/BrandModel';

interface IScoreProps {
  globalScore: number
}

interface ITopBrandInformationsProps {
  globalBrandInformations: BrandModel
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

function getGlobalScore(total: number) : number {
  return Math.round(total / 3);
}
function GlobalInformationsBrand({ globalBrandInformations }: ITopBrandInformationsProps) {
  const [name] = useState(globalBrandInformations.name);
  const [country] = useState(globalBrandInformations.country);
  // eslint-disable-next-line max-len
  const globalScore = getGlobalScore(globalBrandInformations.environmentRating + globalBrandInformations.animalRating + globalBrandInformations.peopleRating);

  return (
    <div className="global-information-brand">
      <div className="image-box2">
        <div className="image-box3">

          <div className="informations-box1">
            <p className="name1-home">{name}</p>
            <div>
              { country }
            </div>

            <Score globalScore={globalScore} />
          </div>
        </div>
      </div>
    </div>
  );
}

function BrandPage() {
  const { productId } = useParams();
  const [data, setData] = useState<BrandModel | null>(null);
  const getBrand = async () => {
    const dataBack = await BrandByIdBusiness(productId || "");
    setData(dataBack);
  };

  useEffect(() => {
    getBrand();
  }, []);

  return (
    <div className="brandPage" style={{ width: window.innerWidth, height: window.innerHeight }}>
      {
        data && (
        <div className="informations-brand">
          <button className="back-product-page" type="button">
            <Link className="nav-link" to="/Search">
              <FontAwesomeIcon icon={faArrowLeft} className="icon-navigation" />
            </Link>
          </button>

          <GlobalInformationsBrand globalBrandInformations={data} />

          <div className="description-home-box">
            {
            Array.from({ length: 3 }, (_, i) => (
              <span>
                { `${data.categories[i]} - `}
              </span>
            ))
}
          </div>

          <div className="description-home-box">
            <div className="description-home">
              { data.ratingDescription }
            </div>
          </div>
        </div>
        )
      }
    </div>
  );
}

export default BrandPage;
