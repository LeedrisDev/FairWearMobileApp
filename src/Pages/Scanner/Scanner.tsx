import {Readers} from "@ericblade/quagga2";
import React, { useState } from 'react';


const Scanner = () => {

    const [result, setResult] = useState('No result');

    const handleError = (err: any) => {
        console.log(err)
    }

    const handleScan = (result: any) => {
        if(result){
            setResult(result)
        }
    }

    const previewStyle = {
        height: 240,
        width: 320,
    }

    return (
        <div className="scanner">


            <div className="result">{result}</div>
        </div>
    );
}

export default Scanner;