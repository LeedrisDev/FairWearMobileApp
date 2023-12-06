import * as React from 'react';
import gloves from '../../assets/glove.jpeg';
import './HistoryModal.css';
import { GeneralContext } from '../../Contexts/GeneralContext';
import { Link } from 'react-router-dom';

function HistoryModal() {
  const generalContext = React.useContext(GeneralContext);
  const { history } = generalContext;

  return (
    <div className="category">
      <div className="box-header">
        <span className="title-two">History</span>

        <Link to="/Levels" className="nav-link-score">
          <span className="title-see-all nav-link">See all</span>
        </Link>
      </div>
      <div className="box">
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
