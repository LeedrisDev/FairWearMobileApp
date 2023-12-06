import * as React from 'react';
import vinted from '../../assets/vinted.png';
import './HistoryModal.css';
import { GeneralContext } from '../../Contexts/GeneralContext';
import {getProductById} from "../../DataAccess/ProductDataAccess";

import { useState, useEffect } from 'react';

function HistoryModal() {
    const generalContext = React.useContext(GeneralContext);
    const { history } = generalContext;
    const [productNames, setProductNames] = useState([]);

    useEffect(() => {
        const fetchProductNames = async () => {
            let names = [];
            for (let e of history) {
                let appel = await getProductById(e.productId);
                names.push(appel.name);
            }
            setProductNames(names);
        };

        fetchProductNames();
    }, [history]);

    return (
        <div className="category">
            <div className="box-header">
                <span className="title-two">History</span>
            </div>
            <div className="box">
                <div className="clothes-alternatives-profil">
                    {productNames.map((value, index) => (
                        <div className="clothing-item-alternatives-profil" key={index}>
                            <img src={vinted} className="item-image-alternatives-profil" alt="" />
                            <div className="brand-and-grade1 title-four">
                                <span>{value}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default HistoryModal;
