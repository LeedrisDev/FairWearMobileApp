import axios from 'axios';
import {BrandModel} from '../Models/BrandModel';

export async function getBrandByName(brand: string): Promise<BrandModel> {
  try {
    const response = await axios.post('https://gateway.traefik.me/api/brand/name', {
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
    const response = await axios.get(`https://gateway.traefik.me/api/brand/${brandId}`);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

export async function getBrandSearchSuggestions(searchInput: string): Promise<[BrandModel]> {
  try {
    const response = await axios.get(`https://gateway.traefik.me/api/brand?name=${searchInput}`);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}