import * as React from 'react';
import Alternatives from '../../Components/ProductPage/Alternatives';
import Composition from '../../Components/ProductComposition/ProductComposition';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import GlobalInformations from '../../Components/ProductPage/GlobalInformations';
import { Link } from 'react-router-dom';
import ScoreBar from '../../Components/ProductPage/ScoreBar';

import './ProductPage.css';
import { ProductModel } from '../../Models/ProductModel';
import product1 from '../../Tests/ProductExamples';

interface ProductPageProps {
  product: ProductModel
  onDetected: () => void
}

function ProductPage({ product, onDetected }: ProductPageProps) {
  return (
    <div className="productPage" style={{ width: window.innerWidth, height: window.innerHeight }}>
      <button className="back-product-page" type="button" onClick={onDetected}>
        <Link className="nav-link" to="/">
          <FontAwesomeIcon icon={faArrowLeft} className="icon-navigation" />
        </Link>
      </button>
      <GlobalInformations globalProductInformations={product} />
      <ScoreBar informations={product.scores} />
      <Composition composition={product1.composition} />
      {' '}
      {/* To remove once composition is treated in backend */}
      <Alternatives />
    </div>
  );
}

export default ProductPage;
