import * as React from 'react';
import Composition from '../../Components/ProductComposition/ProductComposition';
import GlobalInformations from '../../Components/ProductPage/GlobalInformations';
import { Link } from 'react-router-dom';
import ScoreBar from '../../Components/ProductPage/ScoreBar';
import './ProductPage.css';
import { ProductModel } from '../../Models/ProductModel';
import product1 from '../../Tests/ProductExamples';
import vinted from '../../assets/images/vinted.png';
import vestiairecollective from '../../assets/images/vestiaire-collective.jpeg';
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
    <div className="productPage">
      <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />
      {isAlternative ? (
        <div className="alternatives">
          <div className="alternatives-box">
            <button className="back-product-page" type="button" aria-label="Back to Previous Page">
              <Link className="nav-link" to="/">
                <i className="bx bx-left-arrow-alt" />
              </Link>
            </button>

            <div className="clothes-alternatives-alternative-page">
              {
                Array.from(product1.alternatives).map((alternative) => (
                  <a href={alternative.link} className="clothing-item-alternatives" style={{ textDecoration: 'none', color: 'black' }}>
                    <img src={vinted} className="item-image-alternatives" alt="" />
                    <div className="brand-and-grade1 title-four">
                      <div style={{ textDecoration: 'none' }}>{alternative.name}</div>
                    </div>
                  </a>
                ))
              }
            </div>
          </div>
        </div>
      ) : (
        <div>
          <button className="back-product-page" type="button" aria-label="Back to Previous Page">
            <Link className="nav-link" to="/">
              <i className="bx bx-left-arrow-alt" />
            </Link>
          </button>
          <div className="product-content">
            <GlobalInformations globalProductInformations={product} />
            <ScoreBar informations={product.scores} />
            <Composition composition={product.composition} />
            <div className="alternatives">
              <div className="alternatives-box">
                <div className="box-header-alternative">
                  <div className="title-product-product-page">Alternatives</div>
                  {
                    product1.alternatives.length === 0 ? null
                      : <div className="voir-plus" onClick={showAlternatives}>Voir plus</div>
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
                              alt="vc"
                            />
                          </a>
                          <div className="brand-and-grade1 title-four">
                            <span>Vestiaire Collective</span>
                          </div>
                        </div>
                      </div>
                    )
                    : (
                      <div className="clothes-alternatives-product-page">
                        {Array.from([product1.alternatives[0], product1.alternatives[1], product1.alternatives[2]])
                          .map((alternative) => (
                            <a
                              href={alternative.link}
                              className="clothing-item-alternatives"
                              style={{ textDecoration: 'none', color: 'black' }}
                            >
                              <img
                                src={vinted}
                                className="item-image-alternatives-product-page"
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
        </div>
      )}
    </div>
  );
}

export default ProductPage;
