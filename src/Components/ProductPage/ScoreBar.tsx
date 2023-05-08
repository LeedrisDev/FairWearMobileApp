import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome";
import { IProductScore } from "../../Tests/InterfaceProduct";
import ProgressBar from 'react-bootstrap/ProgressBar';
import { faDog, faLeaf, faPerson } from "@fortawesome/free-solid-svg-icons";

import 'bootstrap/dist/css/bootstrap.min.css';

interface IPropsProductInformations {
    informations: IProductScore
}

interface IPropsDesignBar{
    icon: IconDefinition,
    percent: number,
}

function DesignBar(props: any) {
    return (
        <div className="design-bar">
            <FontAwesomeIcon icon={props.icon}/>
            <ProgressBar now={props.percent} />
        </div>
    )
}

function ScoreBar(props : IPropsProductInformations) {
    return (
        <div className="score">
            <div>Score Breakdown</div>
            <DesignBar percent={props.informations.environemental} icon={faLeaf} />
            <DesignBar percent={props.informations.moral} icon={faPerson} />
            <DesignBar percent={props.informations.animal} icon={faDog} />
        </div>
    )
}

export default ScoreBar