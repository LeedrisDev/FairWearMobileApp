import React, { useState } from 'react';

import './productNotFound.css';

function ProductNotFound(props: any) {
    const code = "TEST";

    return (
        <div className="productNotFound__container">
            <h2>Product not found</h2>
            <p>The barcode: {code} gave no results!</p>
            <p>You can also enter the barcode below and try again:</p>
        </div>
    )
};

export default ProductNotFound;
