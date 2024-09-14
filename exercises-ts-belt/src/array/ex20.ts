// Exercice 20: Créer une liste répétitive et la transformerUtilise Array.repeat (pour créer une liste en répétant un produit 5 fois).Utilise Array.map (pour appliquer une transformation à chaque produit répété).

import { Product } from "./type";
import { A } from "@mobily/ts-belt";

const product: Product = { name: 'Mouse', price: 25, inStock: true };

export const ArrayFn20 = () => {
  const repeatedProducts = A.repeat(5, product);
  console.log("🚀 ~ ArrayFn20 ~ repeatedProducts:", repeatedProducts)

  const transformedProducts = A.map(repeatedProducts, (p: Product) => ({
    ...p,
    price: p.price + 10,
  }));
  console.log("🚀 ~ transformedProducts ~ transformedProducts:", transformedProducts)
};
