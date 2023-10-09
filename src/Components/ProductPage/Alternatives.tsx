import * as React from 'react';
import vestiairecollective from '../../assets/vestiaire-collective.jpeg';
import vinted from '../../assets/vinted.png';
import { IAlternativeProduct } from '../../Tests/InterfaceProduct';

import './Alternatives.css';
import { BrandModel } from '../../Models/BrandModel';

interface IAlternativesProps {
  alternatives: IAlternativeProduct[]
}

function Alternatives({ alternatives }: IAlternativesProps) {
  return (
    <div className="alternatives">
      <div className="alternatives-box">
        <div className="box-header-alternative">
          <div className="title-product">Alternatives</div>
            {
                alternatives.length === 0 ? null : <div className="voir-plus">Voir plus</div>
            }
        </div>

        {
          alternatives.length === 0

            ? (
              <div className="clothes">
                <div className="clothing-item">
                  <a href="https://www.vinted.fr/">
                    <img src={vinted} className="alternatives-image" alt="vinted" />
                  </a>
                  <div className="brand-and-grade1 title-four">
                    <span>Vinted</span>
                  </div>
                </div>

                <div className="clothing-item">
                  <a href="https://vestiairecollective.com/">
                    <img src={vestiairecollective} className="alternatives-image" alt="vestiaire-collective" />
                  </a>
                  <div className="brand-and-grade1 title-four">
                    <span>Vestiaire Collective</span>
                  </div>
                </div>
              </div>
            )
            : (
              <div className="clothes-alternatives">
                {Array.from([alternatives[0], alternatives[1]]).map((alternative) => (
                  <a href={alternative.link} className="clothing-item-alternatives">
                    <img src={vinted} className="item-image-alternatives" alt="" />
                    <div className="brand-and-grade1 title-four">
                      <span>{alternative.name}</span>
                    </div>
                  </a>
                ))}
              </div>
            )
        }
      </div>
    </div>
  );
}

export default Alternatives;
