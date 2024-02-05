import { IProductInformations } from './InterfaceProduct';
import gloves from '../assets/images/gloves.jpeg';
import gloves2 from '../assets/images/gloves2.jpeg';
import gloves3 from '../assets/images/gloves3.jpeg';

const product1: IProductInformations = {
  name: 'Black glove HardFace',
  brand: 'The North Face',
  country: 'United State',
  image: gloves,
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
      name: 'The North Face bl...',
      image: gloves2,
      link: 'https://www.vinted.fr/items/3354854143-rino-glove-unisex-gants?referrer=catalog',
    },
    {
      name: 'Black gloves',
      image: gloves3,
      link: 'https://www.vinted.fr/',
    },
    {
      name: 'Ski gloves The Nor...',
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
