import postBrand from '../DataAccess/BrandDataAccess';

export default function BrandBusiness(brand: string) {
  console.log(postBrand(brand));
}
