import { IProductInformations } from './InterfaceProduct';

const product1: IProductInformations = {
  name: 'Black glove HardFace',
  brand: 'The North Face',
  country: 'United State',
  image: 'produit1',
  globalScore: 3,
  scores: {
    moral: 3,
    animal: 4,
    environmental: 3,
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
