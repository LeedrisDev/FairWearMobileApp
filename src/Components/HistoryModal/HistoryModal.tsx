import * as React from 'react';
import { IProductInformations } from '../../Tests/InterfaceProduct';
import vinted from '../../assets/images/vinted.png';

import '../../App.css';
import './HistoryModal.css';

interface IHistoryModalProp {
  history: IProductInformations[],
}

function HistoryModal({ history }: IHistoryModalProp) {
  return (
    <div className="category">
      <div className="box-header">
        <span className="title-two">History</span>
      </div>
      <div className="box">
        <div className="clothes-alternatives-profil">
          {Array.from(history.map(() => (
            <div className="clothing-item-alternatives-profil">
              <img src={vinted} className="item-image-alternatives-profil" alt="" />
              <div className="brand-and-grade1 title-four">
                <span>Produit</span>
              </div>
            </div>
          )))}
        </div>
      </div>
    </div>
  );
}

export default HistoryModal;
