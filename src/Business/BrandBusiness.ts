import { getBrandById, getBrandByName, getBrandSearchSuggestions } from '../DataAccess/BrandDataAccess';
import { BrandModel } from '../Models/BrandModel';

export async function BrandByName(brand: string): Promise<BrandModel> {
  return getBrandByName(brand);
}

export async function BrandByIdBusiness(brandId: string): Promise<BrandModel> {
  return getBrandById(brandId);
}

export async function BrandSearchSuggestions(searchInput: string): Promise<[BrandModel]> {
  return getBrandSearchSuggestions(searchInput);
}
