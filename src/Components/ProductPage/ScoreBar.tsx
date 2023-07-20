import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {IconDefinition} from '@fortawesome/fontawesome';
import {IProductScore} from '../../Tests/InterfaceProduct';
import './ScoreBar.css';
import {faDog, faLeaf, faPerson} from '@fortawesome/free-solid-svg-icons';

import * as React from 'react';
import {IconProp} from '@fortawesome/fontawesome-svg-core';

interface IPropsProductInformations {
  informations: IProductScore
}

interface IPropsDesignBar {
  icon: IconDefinition,
  percent: number,
}

function DesignBar({ icon, percent }: IPropsDesignBar) {
  return (
    <div className="design-bar">
      <div className="icon-design-bar-box">
        <FontAwesomeIcon icon={icon as IconProp} className="icon-design-bar" />
      </div>

      <div className="percent-design-bar-box">
        <div className="progress-container">
          <div className="progress-bar" style={{width: `${percent * 10}%`}}>
              <div className="progress-bar-inside"/>
          </div>
        </div>
      </div>

    </div>
  );
}

function ScoreBar({ informations } : IPropsProductInformations) {
  return (
    <div className="score-bar">
      <div className="score-bar-box">
          <div className="title-product">Score Breakdown</div>
          <DesignBar percent={informations.environmental} icon={faLeaf as IconDefinition}/>
          <DesignBar percent={informations.moral} icon={faPerson as IconDefinition}/>
        <DesignBar percent={informations.animal} icon={faDog as IconDefinition} />
      </div>
    </div>
  );
}

export default ScoreBar;
