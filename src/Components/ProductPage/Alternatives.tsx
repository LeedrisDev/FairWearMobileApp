import product1 from "../../assets/produit1.png";

import "./Alternatives.css"
interface IPropsAlternatives {
    alternative: string[]
}

function Alternatives(props : IPropsAlternatives) {
    return (
        <div className="score">
            <div>Alternatives</div>
            <div className='clothes'>
                <div className='clothing-item'>
                    <img src={product1} className='item-image' />
                    <div className='brand-and-grade title-four'>
                        <span>Shirt</span>
                    </div>
                </div>
                <div className='clothing-item'>
                    <img src={product1} className='item-image' />
                    <div className='brand-and-grade title-four'>
                        <span>Shirt</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Alternatives