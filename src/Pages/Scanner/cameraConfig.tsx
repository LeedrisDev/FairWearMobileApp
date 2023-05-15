import { QuaggaJSConfigObject } from "@ericblade/quagga2";

let config: QuaggaJSConfigObject = {
    inputStream: {
        name: "Live",
        type: "LiveStream",
        target: document.querySelector('#interactive') as  string | Element | undefined,
        constraints: {
            width: window.innerWidth,
            height: window.innerHeight,
            facingMode: "environment"
        },
    },
    decoder: {
        readers: [
            "code_128_reader",
            "ean_reader",
            "ean_8_reader",
            "code_39_reader",
            "code_39_vin_reader",
            "codabar_reader",
            "upc_reader",
            "upc_e_reader",
            "i2of5_reader"
        ],
    }
}

export default config