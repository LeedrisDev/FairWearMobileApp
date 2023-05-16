import Scanner from './Scanner';
import React, { useState } from 'react';
import ProductPage from '../Product/ProductPage';

function ScannerPage() {
  const [result, setResult] = useState(null);

  const onDetected = (result: any) => {
    setResult(result);
  };

  return (
    <div className="ScannerPage">
      <div className="text">
        result is :
        {result}
      </div>
      {
          result ? <div></div> : <Scanner onDetected={onDetected} />
      }
    </div>
  );
}

export default ScannerPage;
