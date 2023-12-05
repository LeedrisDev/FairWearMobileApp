import * as React from 'react';
import vinted from '../../assets/vinted.png';

import './HistoryModal.css';
import {GeneralContext, SmallProductModel} from "../../Contexts/GeneralContext";

function HistoryModal() {
    const generalContext = React.useContext(GeneralContext);
    const history = generalContext.history;

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
