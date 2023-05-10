import React, { lazy, Suspense, useState, useEffect } from 'react';

import dataHandler from '../dataHandler';

import BarcodeInputField from '../barcodeInputField/index';

import './cameraHandler.css';

const Video = lazy(() => import('../Video'));

const CameraHandler = () => {

  const [ isCameraSupported, setCameraSupported ] = useState(false);
  const [ isCameraEnabled, setCameraEnabled ] = useState(dataHandler.isCameraPermissionGranted());


  // @ts-ignore
  useEffect(() => {

    async function setCameraSupportedTrue()
    {
      if (navigator.mediaDevices && await navigator.mediaDevices.getUserMedia({video: true})) {
        setCameraSupported(true);
      }
    }

    setCameraSupportedTrue().then();

  }, [])

  const onCamEnabled = () => {
    dataHandler.cameraPermissionGranted();
    setCameraEnabled(true);
  }

  return (
      <>
        {
          isCameraSupported && isCameraEnabled ?
            <Suspense fallback={<div>Loading...</div>}>
            </Suspense>
            :
            ""
        }

        {isCameraSupported && !isCameraEnabled ?
            <>
              <div className="cameraHandler__message">Enable your camera with the button below
                <br/>
                <div className="cameraHandler__messageIcon"><h1></h1></div>
              </div>
              <button type="button" aria-label="Enable Camera" className="btn__round camera__enable" onClick={onCamEnabled}>
                camera
              </button>
            </>
            : ""
        }

        {!isCameraSupported ?
            <div className="cameraHandler__unsopported">
              <div>
                <p>Your device does not support camera access or something went wrong <span role="img" aria-label="thinking-face">🤔</span></p>
                <p>You can enter the barcode below</p>
                <BarcodeInputField />
              </div>
            </div>
            :""
        }
      </>
  );
}

export default CameraHandler;
