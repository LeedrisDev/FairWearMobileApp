import Scanner from './Scanner';
import React, { useState } from 'react';
import ProductPage from '../Product/ProductPage';

import './ScannerPage.css';

function ScannerPage() {
  const [result, setResult] = useState(null);

  const onDetected = (result: any) => {
    setResult(result);
  };

  return (
    <div className="ScannerPage" style={{ width: window.innerWidth, height: window.innerHeight }}>
      {
          result ? <ProductPage onDetected={onDetected} /> : <Scanner onDetected={onDetected} />
      }
    </div>
  );
}

export default ScannerPage;
