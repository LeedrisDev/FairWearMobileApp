import ProductPage from "./ProductPage";
import Scanner from "./Scanner";
import React, { useState } from "react";

import "./ScannerPage.css"

function ScannerPage() {
    const [result, setResult] = useState(null);

    const onDetected = (result: any) => {
        setResult(result);
    };

    return (
        <div className="ScannerPage" >
            {
                result ? <ProductPage  result={result}/>: <Scanner onDetected={onDetected} />
            }
        </div>
    );
}

export default ScannerPage;