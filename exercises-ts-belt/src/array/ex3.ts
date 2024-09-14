//  Exercice 3: Fusionner et copier des listesUtilise Array.concat (pour combiner deux listes de produits).Utilise Array.concatMany (pour ajouter plusieurs listes de produits).Utilise Array.copy (pour créer une copie de la liste combinée).

import { A } from "@mobily/ts-belt";

import { Product } from "./type";

const products: Product[] = [
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Mouse", price: 25, inStock: false },
];
const accessories: Product[] = [
  { name: "Keyboard", price: 75, inStock: true },
  { name: "Monitor", price: 200, inStock: true },
];
export const ArrayFn3 = () => {
    const allProducts = A.concat(accessories, products);
    console.log("🚀 ~ ArrayFn3 ~ allProducts:", allProducts)
    const allProducts2 = A.concatMany([allProducts]);
    console.log("🚀 ~ ArrayFn3 ~ allProducts2:", allProducts2)
    const allProductsCopy = A.copy(allProducts2);
    console.log("🚀 ~ ArrayFn3 ~ allProductsCopy:", allProductsCopy)
    
};
