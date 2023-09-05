import { ProductModel } from '../Models/ProductModel';
import { getProductByUpc } from '../DataAccess/ProductDataAccess';

export default async function ProductByUpc(barcode: string): Promise<ProductModel> {
  return getProductByUpc(barcode);
}
