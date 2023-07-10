import {getBrandById, postBrand} from '../DataAccess/BrandDataAccess';
import { IBrandModel } from '../Models/BrandModel';

export async function BrandBusiness(brand: string): Promise<IBrandModel> {
  const data = await postBrand(brand);
  return data;
}

export async function BrandByIdBusiness(brandId: string): Promise<IBrandModel> {
  const data = await getBrandById(brandId);
  return data;
}


