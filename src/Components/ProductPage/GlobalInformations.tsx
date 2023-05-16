import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTshirt, faEarth, faMap,
} from '@fortawesome/free-solid-svg-icons';
import { IGlobalProductInformations } from '../../Tests/InterfaceProduct';
import { useState } from 'react';
import * as React from 'react';
import product1 from '../../assets/produit1.png';

import { IconDefinition } from '@fortawesome/fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

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
      <div className="detailsIcon">
        <FontAwesomeIcon icon={iconType as IconProp} />
      </div>

      <p className="detailsText">{texte}</p>
    </div>
  );
}

function Score({ globalScore }: IPropsScore) {
  const [score] = useState(globalScore);

  return (
    <div className="score-information">
      {
                Array.from({ length: 5 }, (_, i) => {
                  if (i < score) {
                    return (
                      <div className="scoreIcon" key={i}>
                        <FontAwesomeIcon className="coloredIcon" icon={faEarth} />
                      </div>
                    );
                  }

                  return (
                    <div className="scoreIcon" key={i}>
                      <FontAwesomeIcon className="icon" icon={faEarth} />
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
    <div className="product-page">
      <div className="image-box">
        <img src={product1} className="item-image" alt="" />
      </div>

      <div className="informations-box">
        <p className="name">{name}</p>

        <Score globalScore={globalScore} />

        <TextAndIcon icon={faTshirt as IconDefinition} text={brand} />
        <TextAndIcon icon={faMap as IconDefinition} text={country} />
      </div>
    </div>
  );
}

export default GlobalInformations;
