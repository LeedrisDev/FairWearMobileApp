import React, { useState, useEffect } from 'react';
import Quagga from '@ericblade/quagga2';


import BarcodeInputField from '../barcodeInputField/index';

import VideoSkeleton from './Video.skeleton';

import './video.css';

const Video = () => {
  const [ videoInit, setVideoInit ] = useState(false);
  const [ videoError, setVideoError ] = useState(false);
  const [ attempts, setAttempts ] = useState(0);
  const [ barcode, setBarcode ] = useState(null);

  const onInitSuccess = () => {
    Quagga.start();
    setVideoInit(true);
  }

  const onDetected = (result: any) => {
    Quagga.offDetected(onDetected);
    fetch(`https://world.openfoodfacts.org/api/v0/product/${result.codeResult.code}.json`)
      .then(res => res.json())
      // eslint-disable-next-line no-use-before-define
      .then(res => onInfoFetched(res));
  }

  const onInfoFetched = (res: any) => {
    const { status, code } = res;
    setBarcode(code);
    console.log(barcode)
    setAttempts(prevState => prevState + 1);

    if (status === 1) {
      //add history
    } else {
      Quagga.onDetected(onDetected);
    }
  }

  // @ts-ignore
  useEffect(async () => {
    if(navigator.mediaDevices && await navigator.mediaDevices.getUserMedia) {


      await Quagga.init({
        inputStream: {
          name: "Live",
          type: "LiveStream",
          // @ts-ignore
          target: document.querySelector('#video')
        },
        numOfWorkers: 1,
        locate: true,
        decoder: {
          readers: ['ean_reader', 'ean_8_reader', 'upc_reader', 'code_128_reader']
        }
      }, (err) => {
        if (err) {
          setVideoError(true);
          return;
        }
        onInitSuccess();
      });


      Quagga.onDetected(onDetected);
      return () => Quagga.stop();
    }

    return undefined;
  }, []);

  useEffect(() => {
    if (attempts > 3) {
      console.log("ouep");
    }
  }, [attempts]);

  return (
    <div>
      <div className="video__explanation">
        <p>Scan a product&apos;s barcode and get its nutritional values <span role="img" aria-label="apple">🍎</span></p>
      </div>
      <div className="video__container">
        {videoError ?
          <div className="skeleton__unsopported">
            <div>
              <p>Your device does not support camera access or something went wrong <span role="img" aria-label="thinking-face">🤔</span></p>
              <p>You can enter the barcode below</p>
              <BarcodeInputField />
            </div>
          </div>
          :
          <div>
            <div className="video" id="video" />
            {videoInit ? '' : <VideoSkeleton error={undefined} />}
          </div>
        }
      </div>
    </div>
    );
}

export default Video;
