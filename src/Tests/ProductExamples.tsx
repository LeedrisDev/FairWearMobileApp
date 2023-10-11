import { IProductInformations } from './InterfaceProduct';
import gloves from '../assets/glove.jpeg';

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
  alternatives: [
    {
      name: 'gants 1',
      image: gloves,
      link: 'https://www.vinted.fr/',
    },
    {
      name: 'gants 2',
      image: gloves,
      link: 'https://www.vinted.fr/',
    },
    {
      name: 'gants 3',
      image: gloves,
      link: 'https://www.vinted.fr/',
    },
    {
      name: 'gants 1',
      image: gloves,
      link: 'https://www.vinted.fr/',
    },
    {
      name: 'gants 2',
      image: gloves,
      link: 'https://www.vinted.fr/',
    },
    {
      name: 'gants 3',
      image: gloves,
      link: 'https://www.vinted.fr/',
    },
    {
      name: 'gants 1',
      image: gloves,
      link: 'https://www.vinted.fr/',
    },
    {
      name: 'gants 2',
      image: gloves,
      link: 'https://www.vinted.fr/',
    },
    {
      name: 'gants 3',
      image: gloves,
      link: 'https://www.vinted.fr/',
    }],
};

export default product1;
