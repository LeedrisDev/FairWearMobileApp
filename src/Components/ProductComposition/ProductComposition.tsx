import * as React from 'react';
import { IProductComposition } from '../../Tests/InterfaceProduct';
import { options } from './constantes';
import { Pie } from 'react-chartjs-2';
import { setPieData } from './PieSetUp';
import {
  Chart as ChartJS, ArcElement, Tooltip, Legend,
} from 'chart.js';

import './ProductComposition.css';

ChartJS.register(ArcElement, Tooltip, Legend);

interface IProductCompositionProps {
  composition: IProductComposition[];
}

function ProductComposition({ composition } : IProductCompositionProps) {
  const pieData = setPieData(composition);

  return (
    <div className="composition-product">
      <div className="composition-product-box">
        <div className="title-product">Composition</div>
        <div className="pie-box">
          <div className="pie">
            <Pie data={pieData} options={options} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductComposition;
