import * as React from 'react';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './BrandPage.css';
import { BrandByIdBusiness } from '../../Business/BrandBusiness';
import { BrandModel } from '../../Models/BrandModel';
import celio from '../../assets/images/celio.jpg';
import zara from '../../assets/images/Zara.png';
import nike from '../../assets/images/nike.jpg';
import bershka from '../../assets/images/bershka.jpg';
import superdry from '../../assets/images/superdry.jpg';

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
      {
        name === "celio" ? (
          <img src={celio} className="item-image-topbrand" alt="product" />
        ) : null
      }
      {
        name === "Zara" ? (
          <img src={zara} className="item-image-topbrand" alt="product" />
        ) : null
      }
      {
        name === "Nike" ? (
          <img src={nike} className="item-image-topbrand" alt="product" />
        ) : null
      }
      {
        name === "Bershka" ? (
          <img src={bershka} className="item-image-topbrand" alt="product" />
        ) : null
      }
      {
        name === "Superdry" ? (
          <img src={superdry} className="item-image-topbrand" alt="product" />
        ) : null
      }
      <div className="title-one">{name}</div>
      <div style={{ marginTop: 12, fontSize: 18 }}>{country}</div>
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
      <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />
      {
        data && (
          <div>
            <button className="back-brand-page" type="button" aria-label="Back to Previous Page">
              <Link className="nav-link" to="/Search">
                <i className="bx bx-left-arrow-alt" />
              </Link>
            </button>

            <div className="brand-content">
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
