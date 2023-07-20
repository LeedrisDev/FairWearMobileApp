import axios from 'axios';
import { IBrandModel } from '../Models/BrandModel';

export async function getBrandByName(brand : string): Promise<IBrandModel> {
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

export async function getBrandById(brandId : string): Promise<IBrandModel> {
  try {
    const response = await axios.get(`https://gateway.traefik.me/api/brand/${brandId}`);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

export async function getBrandSearchSuggestions(searchInput : string) : Promise<[IBrandModel]>
{
  try {
    const response = await axios.get(`https://gateway.traefik.me/api/brand?name=${searchInput}`);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}