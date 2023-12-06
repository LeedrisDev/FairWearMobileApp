import * as React from 'react';
import Alternatives from '../../Components/ProductPage/Alternatives';
import Composition from '../../Components/ProductComposition/ProductComposition';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import GlobalInformations from '../../Components/ProductPage/GlobalInformations';
import { Link, useParams } from 'react-router-dom';
import ScoreBar from '../../Components/ProductPage/ScoreBar';

import './ProductHistPage.css';
import product1 from '../../Tests/ProductExamples';
import { useEffect, useState } from 'react';
import { ProductModel } from '../../Models/ProductModel';
import { getProductById } from '../../DataAccess/ProductDataAccess';
import ProductByUpc from '../../Business/ProductBusiness';

function ProductHistPage() {
  const { productId } = useParams();
  const [data, setData] = useState<ProductModel | null>(null);
  const getBrand = async () => {
    console.log(productId);
    const dataBack = await getProductById(Number(productId));
    console.log(dataBack.upcCode);
    const product = await ProductByUpc(dataBack.upcCode);
    setData(product);
  };

  useEffect(() => {
    getBrand();
  },[]);

    return (
        <div className="productPage" style={{ width: window.innerWidth, height: window.innerHeight }}>
            <button className="back-product-page" type="button" aria-label="Go back">
                <Link className="nav-link" to="/Profile">
                    <FontAwesomeIcon icon={faArrowLeft} className="icon-navigation" />
                </Link>
            </button>
            {data && (
                <>
                    <GlobalInformations globalProductInformations={data} />
                    <ScoreBar informations={data.scores} />
                    <Composition composition={product1.composition} />
                </>
            )}
            <Alternatives />
        </div>
    );

}

export default ProductHistPage;
