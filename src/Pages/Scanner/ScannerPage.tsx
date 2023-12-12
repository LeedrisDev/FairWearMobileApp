import ProductPage from '../Product/ProductPage';
import Scanner from './Scanner';
import * as React from 'react';
import { useEffect } from 'react';

import './ScannerPage.css';
import { ProductModel } from '../../Models/ProductModel';
import { useState } from 'react';

interface ScannerStateProps {
  barcode: string;
  product: ProductModel | null;
}

function ScannerPage() {

  const [result, setResult] = useState(null)

  const onDetected = (resultFinal: any) => {
    setResult(resultFinal)
  }

  /*const initialState: ScannerStateProps = {
    barcode: '',
    product: null,
  };

  const [state, setState] = React.useState(initialState);
  const { barcode, product } = state;

  const updateState = (newState: any) => {
    setState({ ...state, ...newState });
  };

  function isValidUPCorEAN(code: string): boolean {
    const upcEanRegex = /^[0-9]{12,13}$/;
    return upcEanRegex.test(code);
  }

  const onDetected = async (resultFinal: any) => {
    if (isValidUPCorEAN(resultFinal)) {
      updateState({ barcode: resultFinal });
    } else {
      console.error(`bad barcode format ${resultFinal}`);
    }
  };

  useEffect(() => {
    if (barcode !== '') {
      ProductByUpc(barcode).then((productResponse: ProductModel) => {
        updateState({ product: productResponse });
      });
    }
  }, [barcode]);

  const handleBackButton = () => {
    updateState({ product: null });
  }; */

  const mockedProduct: ProductModel = {
    name: 'The North Face Hardface Glove',
    country: 'United States',
    image: 'No image found',
    globalScore: 3,
    scores: {
      moral: 3,
      animal: 4,
      environmental: 3,
    },
    composition: [{
      percentage: 40,
      component: 'coton',
    }, {
      percentage: 60,
      component: 'polyester',
    }],
    brand: 'The North Face',
  };

  return (
    <div className="ScannerPage">
      {
        result !== null ? (
          <ProductPage product={mockedProduct} onDetected={onDetected} />
        ) : (
          <Scanner onDetected={onDetected} />
        )
      }
    </div>
  );
}

export default ScannerPage;
