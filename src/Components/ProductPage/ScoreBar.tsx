import { IProductScore } from '../../Tests/InterfaceProduct';
import './ScoreBar.css';
import * as React from 'react';

interface IPropsProductInformations {
  informations: IProductScore
}

interface IPropsDesignBar {
  icon: string,
  percent: number,
}

function DesignBar({ icon, percent }: IPropsDesignBar) {
  return (
    <div className="design-bar">
      {
        icon === 'earth' ? (
          <i className="bx bxs-leaf category-icon" />
        ) : null
      }
      {
        icon === 'animal' ? (
          <i className="bx bxs-dog category-icon" />
        ) : null
      }
      {
        icon === 'moral' ? (
          <i className="bx bxs-group category-icon" />
        ) : null
      }

      <div className="percent-design-bar-box">
        <div className="progress-container">
          <div className="progress-bar" style={{ width: `${percent * 10}%` }}>
            <div className="progress-bar-inside" />
          </div>
        </div>
      </div>
    </div>
  );
}

function ScoreBar({ informations }: IPropsProductInformations) {
  return (
    <div className="score-bar">
      <div className="title-four">Score Breakdown</div>
      <div className="score-breakdown">
        <DesignBar percent={informations.environmental} icon="earth" />
        <DesignBar percent={informations.moral} icon="moral" />
        <DesignBar percent={informations.animal} icon="animal" />
      </div>
    </div>
  );
}

export default ScoreBar;
