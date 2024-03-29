import * as React from 'react';
import gloves from '../../assets/images/glove.jpeg';
import shirt from '../../assets/images/produit1.png';

import '../../App.css';
import './HistoryModal.css';
import { IProductInformations } from '../../Tests/InterfaceProduct';

interface IHistoryModalProp {
  history: IProductInformations[],
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function HistoryModal({ history }: IHistoryModalProp) {
  return (
    <div className="category">
      <div className="box-header">
        <span className="title-two">History</span>
      </div>
      <div className="content-box">
        <div className="clothes-alternatives-profil">
          <div className="clothing-item-alternatives-profil">
            <img src={gloves} className="item-image-alternatives-profil" alt="" />
            <div className="brand-and-grade1">
              <span>The North F...</span>
            </div>
          </div>
          <div className="clothing-item-alternatives-profil">
            <img src={shirt} className="item-image-alternatives-profil" alt="" />
            <div className="brand-and-grade1">
              <span>White shirt</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HistoryModal;
