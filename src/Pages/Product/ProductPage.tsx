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
import vinted from '../../assets/vinted.png';
import vestiairecollective from '../../assets/vestiaire-collective.jpeg';
import { useState } from 'react';

interface ProductPageProps {
  product: ProductModel
  onDetected: () => void
}

function ProductPage({ product, onDetected }: ProductPageProps) {
  const [isAlternative, setIsAlternative] = useState(false);

  const showAlternatives = () => {
    setIsAlternative(!isAlternative);
  };

  return (
    <div
      className="productPage"
      style={{
        width: window.innerWidth,
        height: window.innerHeight,
      }}
    >
      {isAlternative ? (
        <div className="alternatives" style={{ width: window.innerWidth, height: window.innerHeight }}>
          <div className="alternatives-box">
            <button className="back-product-page" type="button">
              <Link className="nav-link" to="/">
                <FontAwesomeIcon icon={faArrowLeft} className="icon-navigation" onClick={showAlternatives} />
              </Link>
            </button>
            <div className="title-list-image">Alternatives</div>
            <div className="clothes-alternatives">
              {
                          Array.from(product1.alternatives).map((alternative) => (
                            <a href={alternative.link} className="clothing-item-alternatives">
                              <img src={vinted} className="item-image-alternatives" alt="" />
                              <div className="brand-and-grade1 title-four">
                                <span>{alternative.name}</span>
                              </div>
                            </a>
                          ))
                      }
            </div>
          </div>
        </div>
      ) : (
        <div>
          <button className="back-product-page" type="button" onClick={onDetected}>
            <Link className="nav-link" to="/">
              <FontAwesomeIcon icon={faArrowLeft} className="icon-navigation" />
            </Link>
          </button>
          <GlobalInformations globalProductInformations={product1} />
          <ScoreBar informations={product1.scores} />
          <Composition composition={product1.composition} />
          <Alternatives alternatives={product1.alternatives} />
          <div className="alternatives">
            <div className="alternatives-box">
              <div className="box-header-alternative">
                <div className="title-product">Alternatives</div>
                {
                              product1.alternatives.length === 0 ? null
                                : <span className="nav-link voir-plus" onClick={showAlternatives}>Voir plus</span>
                          }
              </div>

              {
                          product1.alternatives.length === 0

                            ? (
                              <div className="clothes">
                                <div className="clothing-item">
                                  <a href="https://www.vinted.fr/">
                                    <img src={vinted} className="alternatives-image" alt="vinted" />
                                  </a>
                                  <div className="brand-and-grade1 title-four">
                                    <span>Vinted</span>
                                  </div>
                                </div>

                                <div className="clothing-item">
                                  <a href="https://vestiairecollective.com/">
                                    <img
                                      src={vestiairecollective}
                                      className="alternatives-image"
                                      alt="vestiaire-collective"
                                    />
                                  </a>
                                  <div className="brand-and-grade1 title-four">
                                    <span>Vestiaire Collective</span>
                                  </div>
                                </div>
                              </div>
                            )
                            : (
                              <div className="clothes-alternatives">
                                {Array.from([product1.alternatives[0], product1.alternatives[1]])
                                  .map((alternative) => (
                                    <a
                                      href={alternative.link}
                                      className="clothing-item-alternatives"
                                    >
                                      <img
                                        src={vinted}
                                        className="item-image-alternatives"
                                        alt=""
                                      />
                                      <div className="brand-and-grade1 title-four">
                                        <span>{alternative.name}</span>
                                      </div>
                                    </a>
                                  ))}
                              </div>
                            )
                      }
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductPage;
