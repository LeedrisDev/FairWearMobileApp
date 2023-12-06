import axios from 'axios';
import { ProductModel } from '../Models/ProductModel';
import AppConstants from '../Utils/AppConstants';

export default async function getProductByUpc(barcode: string): Promise<ProductModel> {
  try {
    const response = await axios.get(`${AppConstants.API_HOST}/api/product/${barcode}`);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

interface ProductGlobalInfo {
  'id': number,
  'upcCode': 'string',
  'name': 'string',
  'category': 'string',
  'ranges': [
    'string',
  ],
  'brandId': number
}

export async function getProductById(id: number): Promise<ProductGlobalInfo> {
  try {
    const response = await axios.get(`${AppConstants.API_HOST}/api/product/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}
