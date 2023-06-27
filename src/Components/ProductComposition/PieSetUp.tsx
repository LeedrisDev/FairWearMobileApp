import { IProductComposition } from '../../Tests/InterfaceProduct';
import { borderColor, color } from './constantes';

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

export {
  getBorderColor, getColor, getData, getLabels, setPieData,
};
