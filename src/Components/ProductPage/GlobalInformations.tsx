import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTshirt, faEarth, faMap } from '@fortawesome/free-solid-svg-icons'
import { IGlobalProductInformations } from "../../Tests/InterfaceProduct";;
import { useState } from 'react'

import './GlobalInformations.css'
import {IconDefinition} from "@fortawesome/fontawesome";

interface IProps {
    globalProductInformations: IGlobalProductInformations
}


interface IPropsScore {
    globalScore: number
}

interface IPropsTextandLogo {
    icon: IconDefinition,
    text: string,
}

function TextAndIcon(type: any) {
    const [text, setText] = useState(type.text)
    const [iconType, setIcon] = useState(type.icon)

    return (
        <div className="details-information">
            <div className="detailsIcon">
                <FontAwesomeIcon icon={iconType} />
            </div>

            <p className="detailsText">{text}</p>
        </div>
    )
}

function Score(props: IPropsScore) {
    const [score, setText] = useState(props.globalScore)

    return (
        <div className="score-information">
            {
                Array.from({ length: 5 }, (_, i) => {
                    if (i < score) {
                        return (
                                <div className="scoreIcon" key={i}>
                                    <FontAwesomeIcon className="coloredIcon" icon={faEarth}/>
                                </div>
                        )
                    }
                    else {
                        return (
                                <div className="scoreIcon" key={i}>
                                    <FontAwesomeIcon className="icon" icon={faEarth}/>
                                </div>
                        )
                    }
                })
            }
        </div>
    )
}

function GlobalInformations(props: IProps) {
    const [name, setName] = useState(props.globalProductInformations.name)
    const [brand, setBrand] = useState(props.globalProductInformations.brand)
    const [image, setImage]: any = useState()
    const [country, setCountry] = useState(props.globalProductInformations.country)
    const [globalScore, setGlobalScore] = useState(props.globalProductInformations.globalScore)


    import(`../../assets/${props.globalProductInformations.image}.png`).then(image => {
        return setImage({
            image
        });
    });


    return (
        <div className="product-page">
            <div className="image-box">
                <div className="box">
                    <img alt="" src={image}/>
                </div>
            </div>

            <div className="informations-box">
                <p className="name">{name}</p>

                <Score globalScore={globalScore}/>

                <TextAndIcon icon={faTshirt} text={brand} />
                <TextAndIcon icon={faMap} text={country} />
            </div>
        </div>
    )
}

export default GlobalInformations;