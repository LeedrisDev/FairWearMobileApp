import ProductPage from '../Product/ProductPage';
import Scanner from './Scanner';
import * as React from 'react';
import { useEffect } from 'react';

import './ScannerPage.css';
import ProductByUpc from '../../Business/ProductBusiness';
import { ProductModel } from '../../Models/ProductModel';

interface ScannerStateProps {
  barcode: string;
  product: ProductModel | null;
}

function ScannerPage() {
  const initialState: ScannerStateProps = {
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
  };

  return (
    <div className="ScannerPage">
      {
        product ? (
          <ProductPage product={product} onDetected={handleBackButton} />
        ) : (
          <Scanner onDetected={onDetected} />
        )
      }
    </div>
  );
}

export default ScannerPage;
