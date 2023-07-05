import { IProductInformations } from './InterfaceProduct';

const product1: IProductInformations = {
  name: 'White shirt with stripes',
  brand: 'Ralph Lauren',
  country: 'Bangladesh',
  image: 'produit1',
  globalScore: 2,
  scores: {
    moral: 50,
    animal: 20,
    environemental: 36,
  },
  composition: [
    {
      percentage: 85,
      component: 'polyesther',
    },
    {
      percentage: 15,
      component: 'cotton',
    },
  ],
  alternatives: ['', '', '', ''],
};

export default product1;
