import axios from 'axios';
import {ProductModel} from '../Models/ProductModel';

export async function getProductByUpc(barcode: string): Promise<ProductModel> {
    try {
        const response = await axios.get(`https://gateway.traefik.me/api/product/${barcode}`);
        return response.data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}
