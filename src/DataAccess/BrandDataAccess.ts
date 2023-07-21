import axios from 'axios';
import {BrandModel} from '../Models/BrandModel';
import {AppConstants} from "../Utils/AppConstants";

export async function getBrandByName(brand: string): Promise<BrandModel> {
  try {
    const response = await axios.post(`${AppConstants.API_HOST}/api/brand/name`, {
      name: brand,
    });
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

export async function getBrandById(brandId: string): Promise<BrandModel> {
  try {
    const response = await axios.get(`${AppConstants.API_HOST}/api/brand/${brandId}`);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

export async function getBrandSearchSuggestions(searchInput: string): Promise<[BrandModel]> {
  try {
    console.log({API_HOST: AppConstants.API_HOST})
    const response = await axios.get(`${AppConstants.API_HOST}/api/brand?name=${searchInput}`);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}