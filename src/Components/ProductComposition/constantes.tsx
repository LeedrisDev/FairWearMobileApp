const borderColor = [
  'rgb(51,118,93)',
  'rgb(42,48,30)',
  'rgb(225,225,225)',
  'rgb(109,113,109)',
  'rgba(59,98,81,1)',
  'rgb(0,0,0)',
];

const color = [
  'rgb(51,118,93)',
  'rgb(38,46,40)',
  'rgb(225,225,225)',
  'rgb(109,113,109)',
  'rgba(59,98,81,0.15)',
  'rgb(0,0,0)',
];

const options: any = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      labels: {
        usePointStyle: true,
        pointStyle: 'circle',
        font: {
          family: 'Poppins',
          size: '16',
        },
      },
      display: true,
      position: 'right',
    },
  },
};

export {
  borderColor,
  color,
  options,
};
