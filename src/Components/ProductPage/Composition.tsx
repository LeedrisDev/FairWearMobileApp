import * as React from "react";
import { IProductComposition } from "../../Tests/InterfaceProduct";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import {forEach} from "react-bootstrap/ElementChildren";

ChartJS.register(ArcElement, Tooltip, Legend);

interface IPropsCompositon {
    composition: IProductComposition[]
}


const color = [
    'rgb(51,118,93)',
    'rgb(42,48,30)',
    'rgb(225,225,225)',
    'rgb(109,113,109)',
    'rgba(59,98,81,0.15)',
    'rgb(0,0,0)',
]

const borderColor = [
    'rgb(51,118,93)',
    'rgb(42,48,30)',
    'rgb(225,225,225)',
    'rgb(109,113,109)',
    'rgba(59,98,81,1)',
    'rgb(0,0,0)',
]

const options: any = {
    plugins: {
        legend: {
            display: true,
            position: "right"
        }
    }
};

function getData(composition: IProductComposition[]) {
    var res = [];

    for(let i of composition) {
        res.push(i.percentage)
    }

    return res;
}

function getLabels(composition: IProductComposition[]) {
    var res = [];

    for(let i of composition) {
        res.push(i.component)
    }

    return res;
}

function getBorderColor(lenght: number) {
    let i = 0;
    let res = [];

    while (i < lenght) {
        res.push(borderColor[i]);
        i++;
    }

    return res;
}

function getColor(length: number) {
    let i = 0;
    let res = [];

    while (i < length) {
        res.push(color[i]);
        i++;
    }

    return res;
}

function setPieData(composition: IProductComposition[]) {

    let data = getData(composition);
    let labels = getLabels(composition);
    let color = getColor(data.length);
    let borderColor = getBorderColor(data.length)

    return {
        labels: labels,
            datasets: [
        {
            label: 'Components',
            data: data,
            backgroundColor: color,
            borderColor: borderColor,
            borderWidth: 0,
        },
    ],
    }
};



function Composition(props: IPropsCompositon) {

    const data = setPieData(props.composition)

    return(
        <div className="composition">
            <div className="title">Composition</div>
            <div style={{ width: "320px"}}>
                <Pie data={data} options={options} />
            </div>
        </div>
        );
};
export default Composition;