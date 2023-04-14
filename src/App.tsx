import React, { useState } from "react";
import Scanner from "./Pages/Scanner/Scanner";
import ReactDOM from "react-dom";


function App() {
    const [camera, setCamera] = useState(false);
    const [result, setResult] = useState(null);

    const onDetected = (result: any) => {
        setResult(result);
    };

    return (
        <div className="App">
            <p>{result ? result : "Scanning..."}</p>
            <button onClick={() => setCamera(!camera)}>
                {camera ? "Stop" : "Start"}
            </button>
            <div className="container">
                {camera && <Scanner onDetected={onDetected} />}
            </div>
        </div>
    );
}

export default App



