import * as React from 'react';
import gloves from '../../assets/images/glove.jpeg';
import './HistoryModal.css';
import { GeneralContext } from '../../Contexts/GeneralContext';
import { Link } from 'react-router-dom';

function HistoryModal() {
  const generalContext = React.useContext(GeneralContext);
  const history = generalContext?.history ?? [];

  return (
    <div className="category">
      <div className="box-header">
        <span className="title-two">History</span>
      </div>
      <div className="content-box">
        <div className="clothes-alternatives-profil">
          {history.map((value, index) => (
            <Link to={`/Product/${encodeURIComponent(value.id)}`} className="nav-link-hist">
              <div className="clothing-item-alternatives-profil" key={index}>
                <img src={gloves} className="item-image-alternatives-profil" alt="" />
                <div className="brand-and-grade1 title-four">
                  <span>{value.name}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HistoryModal;
