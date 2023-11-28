import * as React from 'react';
import { useEffect, useState } from 'react';
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
      <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
      {
        Array.from({ length: 5 }, (_, i) => {
          if (i < score) {
            return (
              <div key={i}>
                <i className='bx bx-world colored-icon-home'></i>
              </div>
            );
          }

          return (
            <div key={i}>
              <i className='bx bx-world uncolored-icon-home'></i>
            </div>
          );
        })
      }
    </div>
  );
}

function getGlobalScore(total: number): number {
  return Math.round(total / 3);
}
function GlobalInformationsBrand({ globalBrandInformations }: ITopBrandInformationsProps) {
  const [name] = useState(globalBrandInformations.name);
  const [country] = useState(globalBrandInformations.country);
  // eslint-disable-next-line max-len
  const globalScore = getGlobalScore(globalBrandInformations.environmentRating + globalBrandInformations.animalRating + globalBrandInformations.peopleRating);

  return (
    <div className="header">
      <div className="title-one">{name}</div>
      <div style={{ marginTop: 12 }}>{country}</div>
      <Score globalScore={globalScore} />
    </div>
  );
}

function BrandPage() {
  const { productId } = useParams();
  const [data, setData] = useState<BrandModel | null>(null);
  const getBrand = async () => {
    const dataBack = await BrandByIdBusiness(productId || '');
    setData(dataBack);
  };

  useEffect(() => {
    getBrand();
  }, []);

  return (
    <div className="brandPage">
      <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
      {
        data && (
          <div>
            <button className="back-product-page" type="button" aria-label="Back to Previous Page">
              <Link className="nav-link" to="/Search">
                <i className='bx bx-left-arrow-alt'></i>
              </Link>
            </button>

            <div className='brand-content'>
              <GlobalInformationsBrand globalBrandInformations={data} />

              <div className="brand-specialties">
                {
                  Array.from({ length: 3 }, (_, i) => (
                    <span>
                      {`${data.categories[i]}-`}
                    </span>
                  ))
                }
              </div>

              <div className="brand-description">
                {data.ratingDescription}
              </div>
            </div>
          </div>
        )
      }
    </div>
  );
}

export default BrandPage;
