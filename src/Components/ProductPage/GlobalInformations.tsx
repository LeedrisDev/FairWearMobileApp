import * as React from 'react';
import { IGlobalProductInformations } from '../../Tests/InterfaceProduct';
import product1 from '../../assets/images/glove.jpeg';
import { useState } from 'react';
import './GlobalInformations.css';

interface IProps {
  globalProductInformations: IGlobalProductInformations
}

interface IScoreProps {
  globalScore: number
}

function Score({ globalScore }: IScoreProps) {
  const [score] = useState(globalScore);

  return (
    <div className="score-information1">
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

interface ITextandLogoProps {
  icon: string,
  text: string,
}

function TextAndIcon({ text, icon }: ITextandLogoProps) {
  const [texte] = useState(text);
  const [iconType] = useState(icon);

  return (
    <div className="details-information">
      {
        iconType == 'brand' ? (
          < i className="bx bx-closet brand-icon" />
        )
          : (
            < i className="bx bx-map brand-icon" />
          )
      }
      <div>{texte}</div>
    </div>
  );
}

function GlobalInformations({ globalProductInformations }: IProps) {
  const [name] = useState(globalProductInformations.name);
  const [brand] = useState(globalProductInformations.brand);
  const [country] = useState(globalProductInformations.country);
  const [globalScore] = useState(globalProductInformations.globalScore);

  return (
    <div className="global-information">
      <img src={product1} className="item-image1" alt="product" />
      <div className="informations-box1">
        <div className='title-and-score'>
          <div className="product-name title-two">{name}</div>
          <Score globalScore={globalScore} />
        </div>
        <div className='brand-and-location'>
          <TextAndIcon icon={'brand'} text={brand} />
          <TextAndIcon icon={'location'} text={country} />
        </div>
      </div>
    </div>
  );
}

export default GlobalInformations;
