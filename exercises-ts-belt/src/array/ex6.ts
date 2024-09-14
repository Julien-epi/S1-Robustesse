import { Product } from "./type";
import { A } from "@mobily/ts-belt";

// Exercice 6: Comparer des listes et tester l'inclusion

const products1: Product[] = [
  { name: 'Laptop', price: 1000, inStock: true },
  { name: 'Mouse', price: 25, inStock: false },
];
const products2: Product[] = [
  { name: 'Laptop', price: 1000, inStock: true },
  { name: 'Keyboard', price: 75, inStock: true },
];

const compareProducts = (p1: Product, p2: Product): boolean => {
  return p1.name === p2.name && p1.price === p2.price && p1.inStock === p2.inStock;
};

export const ArrayFn6 = () => {
  const areEqual = A.length(products1) === A.length(products2) && A.every(products1, (product) => {
    return A.some(products2, p => compareProducts(p, product));
  });
  console.log("🚀 ~ ArrayFn6 ~ Les listes sont-elles égales :", areEqual);

  const specificProduct: Product = { name: 'Mouse', price: 25, inStock: false };
  const isIncluded = A.some(products1, product => compareProducts(product, specificProduct));
  console.log("🚀 ~ ArrayFn6 ~ Le produit spécifique est-il inclus dans la liste :", isIncluded);
};
