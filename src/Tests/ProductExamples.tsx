import { IProductInformations } from "./InterfaceProduct";

let product1: IProductInformations = {
    name: "White shirt with stripes",
    brand: "Ralph Lauren",
    country: "Bangladesh",
    image: "produit1",
    globalScore: 2,
    scores : {
        moral: 50,
        animal: 20,
        environemental: 36,
    },
    composition: [
        {
            percentage: 15,
            component: "cotton"
        },
        {
            percentage: 85,
            component: "polyesther"
        }
    ],
    alternatives: ["", "", "", ""]
}
export default product1;