import React, { useEffect } from 'react';
import config from './cameraConfig';
import Quagga from '@ericblade/quagga2';

import './Scanner.css';
import {log} from "util";

async function SendBarcode(barcode) {
  const response = await fetch(`http://localhost:8081/api/product?Upc=${barcode}`);
  const data = await response.json();
  console.log(data);
  return data;
}

function Scanner(props: any) {
  const { onDetected } = props;

  const detected = async (result: any) => {
    let json = await SendBarcode(result.codeResult.code);
    console.log(json);
    onDetected(result.codeResult.code);
  };

  useEffect(() => {
    Quagga.init(config, () => {
      Quagga.start();
      return () => {
        Quagga.stop();
      };
    });

    Quagga.onProcessed((result: any) => {
      const drawingCtx = Quagga.canvas.ctx.overlay;
      const drawingCanvas = Quagga.canvas.dom.overlay;

      if (result) {
        if (result.boxes) {
          drawingCtx.clearRect(
            0,
            0,
            Number(drawingCanvas.getAttribute('width')),
            Number(drawingCanvas.getAttribute('height')),
          );
          result.boxes
            .filter((box: (number[])[]) => box !== result.box)
            .forEach((box: (number[])[]) => {
              Quagga.ImageDebug.drawPath(box, { x: 0, y: 1 }, drawingCtx, {
                color: '#33765d',
                lineWidth: 2,
              });
            });
        }

        if (result.box) {
          Quagga.ImageDebug.drawPath(result.box, { x: 0, y: 1 }, drawingCtx, {
            color: '#33765d',
            lineWidth: 2,
          });
        }

        if (result.codeResult && result.codeResult.code) {
          Quagga.ImageDebug.drawPath(
            result.line,
            { x: 'x', y: 'y' },
            drawingCtx,
            { color: '#33765d', lineWidth: 3 },
          );
        }
      }
    });

    Quagga.onDetected(detected);
  }, []);

  return (
    <div id="interactive" className="viewport" />
  );
}

export default Scanner;
