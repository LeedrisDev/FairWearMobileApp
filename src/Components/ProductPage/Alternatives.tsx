import * as React from 'react';
import vestiairecollective from '../../assets/images/vestiaire-collective.jpeg';
import vinted from '../../assets/images/vinted.png';

import './Alternatives.css';

function Alternatives() {
  return (
    <div className="alternatives">
      <div className="alternatives-box">
        <div className="box-header">
          <div className="title-product">Alternatives</div>
        </div>

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
      </div>
    </div>
  );
}

export default Alternatives;
