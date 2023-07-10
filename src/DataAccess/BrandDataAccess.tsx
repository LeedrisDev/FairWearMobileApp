import axios from 'axios';
import { IBrandModel } from '../Models/BrandModel';

export async function postBrand(brand): Promise<IBrandModel> {
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

export async function getBrandById(brandId): Promise<IBrandModel> {
  try {
    const response = await axios.get(`https://gateway.traefik.me/api/brand/${brandId}`);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

