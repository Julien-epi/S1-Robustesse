// // Exercice 10: Insérer des produits à des positions spécifiquesUtilise Array.insertAt (pour insérer un produit à l'indice 1).Utilise Array.prependToAll (pour ajouter un produit à chaque élément d'une liste).Utilise Array.append (pour ajouter un produit à la fin de la liste)
import { Product } from "./type";
import { A } from "@mobily/ts-belt";

const products: Product[] = [
  { name: 'Laptop', price: 1000, inStock: true },
  { name: 'Mouse', price: 25, inStock: false },
  { name: 'Keyboard', price: 75, inStock: true },
];

export const ArrayFn10 = () => {
  const newProduct: Product = { name: 'Headphones', price: 50, inStock: true };

  const productsWithInserted = A.insertAt(products, 1, newProduct);
  console.log("🚀 ~ ArrayFn10 ~ productsWithInserted:", productsWithInserted)

  const productsWithPrepended = A.prependToAll(products, newProduct);
  console.log("🚀 ~ ArrayFn10 ~ productsWithPrepended:", productsWithPrepended)

  const productsWithAppended = A.append(products, newProduct);
  console.log("🚀 ~ ArrayFn10 ~ productsWithAppended:", productsWithAppended)
};

