import GlobalInformations from '../../Components/ProductPage/GlobalInformations';
import product1 from '../../Tests/ProductExamples';
import * as React from 'react';

import './ProductPage.css';
import Composition from '../../Components/ProductPage/Composition';
import ScoreBar from '../../Components/ProductPage/ScoreBar';
import Alternatives from '../../Components/ProductPage/Alternatives';
import { Link } from 'react-router-dom';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ProductPage(props: any) {
  const { onDetected } = props;

  const undetected = () => {
    onDetected(null);
  };

  return (

    <div className="productPage" style={{ width: window.innerWidth, height: window.innerHeight }}>
      <button className="back-product-page" type="button" onClick={undetected}>
        <Link className="nav-link" to="/">
          <FontAwesomeIcon icon={faArrowLeft} className="icon-navigation" />
        </Link>
      </button>

      <GlobalInformations globalProductInformations={product1} />
      <ScoreBar informations={product1.scores} />
      <Composition composition={product1.composition} />
      <Alternatives />
    </div>
  );
}

export default ProductPage;
