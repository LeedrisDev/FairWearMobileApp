import napperon from '../../assets/images/nepperon.png';
import pemlab from '../../assets/images/pemlab.png';
import sunaia from '../../assets/images/sunaia.png';
import ryfas from '../../assets/images/ryfas.jpg';
import nepivel from '../../assets/images/nepivel.jpg';

export interface ITopBrandInformations {
  name: string,
  theme: string,
  image: string,
  globalScore: number,
  description : string,
}

const Napperon: ITopBrandInformations = {
  name: 'Napperon',
  theme: 'Lingerie pieces upcycled from placemats',
  image: napperon,
  globalScore: 5,
  description: 'At Napperon, we revalue existing material: placemats, embroidered tablecloths, veils and we make our pieces in France, the Basque Country in small quantities, and to order.',
};

const Pemlab: ITopBrandInformations = {
  name: 'Pemlab',
  theme: 'Menstrual lingerie',
  image: pemlab,
  globalScore: 5,
  description: 'Our menstrual shop offers a wide range of healthy, ecological and certified products for menstruation, hormonal disorders, maternity, menopause and intimate hygiene.',
};

const Nepivel: ITopBrandInformations = {
  name: 'Nepivel',
  theme: 'At Nepivel we make clothes, in France, by hand, from upcycled fabrics.',
  image: nepivel,
  globalScore: 5,
  description: 'Nepivel is a combo of my passions and values. I really hope that we can continue to have fun while dressing while respecting the environment and humans.',
};

const Sunaïa: ITopBrandInformations = {
  name: 'Sunaïa',
  theme: 'We are proud to offer you swimwear made in Portugal and France.',
  image: sunaia,
  globalScore: 5,
  description: 'What if you create unforgettable memories this summer with Sunaïa? On average, we only have 80 summers in our life. So let go, feel alive, dare, have fun... We are here to help you enjoy every moment of your summer. At Sunaïa, we believe in the freedom to feel beautiful and confident while respecting the environment.',
};

const Ryfas: ITopBrandInformations = {
  name: 'Ryfas',
  theme: 'At Ryfas, we want to offer a fair price for clothing that lasts over time.',
  image: ryfas,
  globalScore: 5,
  description: 'Ryfas was born from a desire to introduce ethical and sustainable fashion to as many people as possible. This is part of a local approach, respectful of the environment and employees who contribute to the birth of this project.',
};

const topBrands = [
  Sunaïa,
  Ryfas,
  Nepivel,
  Napperon,
  Pemlab,
];

export default topBrands;
