import * as React from 'react';
import { IProductComposition } from '../../Tests/InterfaceProduct';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS, ArcElement, Tooltip, Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const color = [
  'rgb(51,118,93)',
  'rgb(42,48,30)',
  'rgb(225,225,225)',
  'rgb(109,113,109)',
  'rgba(59,98,81,0.15)',
  'rgb(0,0,0)',
];

const borderColor = [
  'rgb(51,118,93)',
  'rgb(42,48,30)',
  'rgb(225,225,225)',
  'rgb(109,113,109)',
  'rgba(59,98,81,1)',
  'rgb(0,0,0)',
];

const options: any = {
  plugins: {
    legend: {
      display: true,
      position: 'right',
    },
  },
};

function getData(composition: IProductComposition[]): number[] {
  return composition.map((item) => item.percentage);
}

function getLabels(composition: IProductComposition[]): string[] {
  return composition.map((item) => item.component);
}

function getBorderColor(lenght: number) {
  let i = 0;
  const res = [];

  while (i < lenght) {
    res.push(borderColor[i]);
    i += 1;
  }

  return res;
}

function getColor(length: number) {
  let i = 0;
  const res = [];

  while (i < length) {
    res.push(color[i]);
    i += 1;
  }

  return res;
}

function setPieData(composition: IProductComposition[]) {
  const data = getData(composition);
  const labels = getLabels(composition);
  const colorFinal = getColor(data.length);
  const borderColorFinal = getBorderColor(data.length);

  return {
    labels,
    datasets: [
      {
        label: 'Components',
        data,
        backgroundColor: colorFinal,
        borderColorFinal,
        borderWidth: 0,
      },
    ],
  };
}

function Composition(composition: IProductComposition[]) {
  const data = setPieData(composition);

  return (
    <div className="composition">
      <div className="title">Composition</div>
      <div style={{ width: '320px' }}>
        <Pie data={data} options={options} />
      </div>
    </div>
  );
}
export default Composition;
