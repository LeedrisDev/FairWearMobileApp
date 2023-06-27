import ProductPage from '../Product/ProductPage';
import Scanner from './Scanner';
import * as React from 'react';
import { useState } from 'react';

import './ScannerPage.css';

function ScannerPage() {
  const [result, setResult] = useState(null);

  const onDetected = (resultFinal: any) => {
    setResult(resultFinal);
  };

  return (
    <div className="ScannerPage" style={{ width: window.innerWidth, height: window.innerHeight }}>
      {
          !result ? <ProductPage onDetected={onDetected} /> : <Scanner onDetected={onDetected} />
      }
    </div>
  );
}

export default ScannerPage;
