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
            <Scanner onDetected={onDetected} />
        </div>
    );
}

export default ScannerPage;