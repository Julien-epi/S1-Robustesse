// // Exercice 1: Vérifier si tous les produits sont en stock et leur nombreUtilise Array.all (pour vérifier si tous les produits sont en stock).Utilise Array.any (pour vérifier si au moins un produit n’est pas en stock).Utilise Array.length (pour obtenir le nombre total de produits).

import { A } from '@mobily/ts-belt';
import { Product } from './type';

const products: Product[] = [
  { name: 'Laptop', price: 1000, inStock: true },
  { name: 'Mouse', price: 25, inStock: false },
  { name: 'Keyboard', price: 75, inStock: true },
];

export const ArrayFn1 = () => {
  const allInStock = A.all(products, product => product.inStock);
  console.log("🚀 ~ ArrayFn1 ~ allInStock:", allInStock)
  const anyOutOfStock = A.any(products, product => !product.inStock);
  console.log("🚀 ~ ArrayFn1 ~ anyOutOfStock:", anyOutOfStock)
  const totalProducts = A.length(products);
  console.log("🚀 ~ ArrayFn1 ~ totalProducts:", totalProducts)

};

