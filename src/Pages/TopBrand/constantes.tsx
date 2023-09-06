import napperon from '../../assets/nepperon.png';
import pemlab from '../../assets/pemlab.png';
import sunaia from '../../assets/sunaia.png';
import ryfas from '../../assets/ryfas.jpg';
import nepivel from '../../assets/nepivel.jpg';

export interface ITopBrandInformations {
  name: string,
  theme: string,
  image: string,
  globalScore: number,
  description : string,
}

const Napperon: ITopBrandInformations = {
  name: 'Napperon',
  theme: 'Pièces de lingerie upcyclées à partir de napperons',
  image: napperon,
  globalScore: 5,
  description: 'Chez Napperon, nous revalorisons de la matière déjà existante : napperons, nappes brodées, voilages et nous confectionnons nos pièces en France, au Pays Basque en petites quantités, et à la commande',
};

const Pemlab: ITopBrandInformations = {
  name: 'Pemlab',
  theme: 'Lingerie menstruelle',
  image: pemlab,
  globalScore: 5,
  description: 'Notre boutique menstruelle propose une large gamme de produits sains, écologiques et certifiés pour les règles, les troubles hormonaux, la maternité, la ménopause et l\'hygiène intime.',
};

const Nepivel: ITopBrandInformations = {
  name: 'Nepivel',
  theme: 'Chez Nepivel on réalise les vêtements, en France, à la main, à partir de tissus upcyclés.',
  image: nepivel,
  globalScore: 5,
  description: 'Nepivel c\'est un combo de mes passions et mes valeurs. J\'ai vraiment espoir que l\'on puisse continuer à s\'amuser en s\'habillant tout en respectant l\'environnement et les humains.\n',
};

const Sunaïa: ITopBrandInformations = {
  name: 'Sunaïa',
  theme: 'Nous sommes fiers de vous proposer des maillots de bain échancrés fabriqués au Portugal et en France.',
  image: sunaia,
  globalScore: 5,
  description: 'Et si vous créiez des souvenirs inoubliables cet été avec Sunaïa ? En moyenne, nous n\'avons que 80 étés dans notre vie. Alors lâchez prise, sentez-vous vivantes, osez, amusez-vous... Nous sommes là pour vous aider à profiter pleinement de chaque instant de votre été. Chez Sunaïa, nous croyons en la liberté de se sentir belle et confiante tout en respectant l\'environnement.',
};

const Ryfas: ITopBrandInformations = {
  name: 'Ryfas',
  theme: 'Chez Ryfas, nous voulons proposer un prix juste pour des vetêments qui durent dans le temps',
  image: ryfas,
  globalScore: 5,
  description: 'Ryfas est née d\'une envie de faire découvrir la mode éthique et durable au plus grand nombre. Celle-ci s\'inscrit dans une démarche locale, respectueuse de l\'environnement et des salarié.es qui contribuent à la naissance de ce projet.',
};

const topBrands = [
  Sunaïa,
  Ryfas,
  Nepivel,
  Napperon,
  Pemlab,
];

export default topBrands;
