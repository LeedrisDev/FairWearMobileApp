import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTshirt, faEarth, faMap,
} from '@fortawesome/free-solid-svg-icons';
import { IGlobalProductInformations } from '../../Tests/InterfaceProduct';
import { useState } from 'react';
import * as React from 'react';
import product1 from '../../assets/produit1.png';
import chemise from '../../Images/chemise.png';

import { IconDefinition } from '@fortawesome/fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import './GlobalInformations.css';

interface IProps {
  globalProductInformations: IGlobalProductInformations
}

interface IPropsScore {
  globalScore: number
}

interface IPropsTextandLogo {
  icon: IconDefinition,
  text: string,
}

function TextAndIcon({ text, icon }: IPropsTextandLogo) {
  const [texte] = useState(text);
  const [iconType] = useState(icon);

  return (
    <div className="details-information">
      <div className="details-icon-box">
        <FontAwesomeIcon icon={iconType as IconProp} className="details-icon" />
      </div>

      <p className="detailsText1">{texte}</p>
    </div>
  );
}

function Score({ globalScore }: IPropsScore) {
  const [score] = useState(globalScore);

  return (
    <div className="score-information1">
      {
        Array.from({ length: 5 }, (_, i) => {
          if (i < score) {
            return (
              <div className="scoreIcon1" key={i}>
                <FontAwesomeIcon className="coloredIcon1" icon={faEarth} />
              </div>
            );
          }

          return (
            <div className="scoreIcon1" key={i}>
              <FontAwesomeIcon className="not-colored-icon1" icon={faEarth} />
            </div>
          );
        })
      }
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
      <div className="grid">
        <div className="image-box1">
          <img src={chemise} className="item-image1" alt="" />
        </div>

        <div className="informations-box1">
          <p className="name1">{name}</p>

          <Score globalScore={globalScore} />

          <TextAndIcon icon={faTshirt as IconDefinition} text={brand} />
          <TextAndIcon icon={faMap as IconDefinition} text={country} />
        </div>
      </div>
    </div>
  );
}

export default GlobalInformations;
