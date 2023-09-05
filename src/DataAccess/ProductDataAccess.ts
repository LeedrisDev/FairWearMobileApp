import axios from 'axios';
import { ProductModel } from '../Models/ProductModel';
import { AppConstants } from '../Utils/AppConstants';

export default async function getProductByUpc(barcode: string): Promise<ProductModel> {
  try {
    const response = await axios.get(`${AppConstants.API_HOST}/api/product/${barcode}`);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}
