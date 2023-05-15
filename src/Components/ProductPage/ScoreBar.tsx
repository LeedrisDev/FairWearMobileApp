import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome';
import { IProductScore } from '../../Tests/InterfaceProduct';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { faDog, faLeaf, faPerson } from '@fortawesome/free-solid-svg-icons';

import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface IPropsProductInformations {
  informations: IProductScore
}

interface IPropsDesignBar {
  icon: IconDefinition,
  percent: number,
}

function DesignBar({ icon, percent }: IPropsDesignBar) {
  return (
    <div className="marche">
      <div>
        <FontAwesomeIcon icon={icon as IconProp} />
      </div>

      <div>
        <ProgressBar now={percent} />
      </div>

    </div>
  );
}

function ScoreBar({ informations } : IPropsProductInformations) {
  return (
    <div className="score">
      <div>Score Breakdown</div>
      <DesignBar percent={informations.environemental} icon={faLeaf as IconDefinition} />
      <DesignBar percent={informations.moral} icon={faPerson as IconDefinition} />
      <DesignBar percent={informations.animal} icon={faDog as IconDefinition} />
    </div>
  );
}

export default ScoreBar;
