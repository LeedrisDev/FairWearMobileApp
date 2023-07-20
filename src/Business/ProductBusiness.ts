import {ProductModel} from "../Models/ProductModel";
import {getProductByUpc} from "../DataAccess/ProductDataAccess";

export async function ProductByUpc(barcode: string): Promise<ProductModel> {
    return await getProductByUpc(barcode);
}