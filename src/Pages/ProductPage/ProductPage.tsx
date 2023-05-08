import GlobalInformations from "../../Components/ProductPage/GlobalInformations";
import product1 from "../../Tests/ProductExamples";
import { useState } from 'react'

import './ProductPage.css'
import Composition from "../../Components/ProductPage/Composition";
import ScoreBar from "../../Components/ProductPage/ScoreBar";
import Alternatives from "../../Components/ProductPage/Alternatives";

function ProductPage() {

    return (
        <div className="productPage">
            <GlobalInformations globalProductInformations={product1} />
            <ScoreBar informations={ product1.scores } />
            <Composition composition={product1.composition} />
            <Alternatives alternative={product1.alternatives} />
        </div>
    )
}

export default ProductPage