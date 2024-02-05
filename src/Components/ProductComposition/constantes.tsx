const borderColor = [
  'rgb(51,118,93)',
  'rgb(42,48,30)',
];

const color = [
  'rgb(51,118,93)',
  'rgb(38,46,40)',
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
