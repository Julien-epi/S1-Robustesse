// // Exercice 3: Accumuler des données en utilisant une fonction d'accumulation dynamiqueObjectif : Tu reçois en argument une fonction d'accumulation et un tableau de produits. Tu dois accumuler les données selon cette fonction pour obtenir un résultat dynamique.Utilise Array.reduce (pour accumuler des données avec la fonction d'accumulation passée en argument).

import { A } from "@mobily/ts-belt";

interface Product {
  name: string;
  price: number;
  inStock: boolean;
  quantity: number;
}

const products: Product[] = [
  { name: "Laptop", price: 1000, inStock: true, quantity: 2 },
  { name: "Mouse", price: 25, inStock: false, quantity: 5 },
  { name: "Keyboard", price: 75, inStock: true, quantity: 3 },
];

export const accumulateData = <T>(
  products: Product[],
  accumulatorFn: (acc: T, product: Product) => T,
  initialValue: T
): T => {
  return A.reduce(products, initialValue, accumulatorFn);
};

export const ArrayFn28 = () => {
  const accumulateTotalQuantity = (acc: number, product: Product) =>
    acc + product.quantity;
  const totalQuantity = accumulateData(products, accumulateTotalQuantity, 0);
  console.log("🚀 ~ ArrayFn28 ~ totalQuantity:", totalQuantity)

};