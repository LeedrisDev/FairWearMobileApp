import {getBrandById, getBrandSearchSuggestions, getBrandByName} from '../DataAccess/BrandDataAccess';
import { IBrandModel } from '../Models/BrandModel';

export async function BrandByName(brand: string): Promise<IBrandModel> {
  const data = await getBrandByName(brand);
  return data;
}

export async function BrandByIdBusiness(brandId: string): Promise<IBrandModel> {
  const data = await getBrandById(brandId);
  return data;
}

export async function BrandSearchSuggestions(searchInput : string) : Promise<[IBrandModel]>
{
  const data = await getBrandSearchSuggestions(searchInput);
  return data;
}




