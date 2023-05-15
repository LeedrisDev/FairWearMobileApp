import React, { useEffect } from "react";
import config from "./cameraConfig";
import Quagga from "@ericblade/quagga2";


const Scanner = (props: any) => {
    const { onDetected } = props;

    useEffect(() => {
        Quagga.init(config, (err: Error) => {
            if (err) {
                console.log(err, "error msg");
            }
            Quagga.start();
            return () => {
                Quagga.stop()
            }
        });

        Quagga.onProcessed((result: any) => {
            var drawingCtx = Quagga.canvas.ctx.overlay,
                drawingCanvas = Quagga.canvas.dom.overlay;

            if (result) {
                if (result.boxes) {
                    drawingCtx.clearRect(
                        0,
                        0,
                        Number(drawingCanvas.getAttribute("width")),
                        Number(drawingCanvas.getAttribute("height"))
                    );
                    result.boxes
                        .filter(function(box: (number[])[]) {
                            return box !== result.box;
                        })
                        .forEach(function(box: (number[])[]) {
                            Quagga.ImageDebug.drawPath(box, { x: 0, y: 1 }, drawingCtx, {
                                color: "#33765d",
                                lineWidth: 2
                            });
                        });
                }

                if (result.box) {
                    Quagga.ImageDebug.drawPath(result.box, { x: 0, y: 1 }, drawingCtx, {
                        color: "#33765d",
                        lineWidth: 2
                    });
                }

                if (result.codeResult && result.codeResult.code) {
                    Quagga.ImageDebug.drawPath(
                        result.line,
                        { x: "x", y: "y" },
                        drawingCtx,
                        { color: "#33765d", lineWidth: 3 }
                    );
                }
            }
        });

        Quagga.onDetected(detected);
    }, []);

    const detected = (result: any) => {
        onDetected(result.codeResult.code);
    };

    return (
            <div id="interactive" className="viewport" />
    );
};

export default Scanner;