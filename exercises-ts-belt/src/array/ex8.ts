 // Exercice 8: Trouver des produits selon des critèresUtilise Array.find (pour trouver le produit dont le nom est Keyboard).Utilise Array.getIndexBy (pour trouver l'indice du produit dont le prix est 1000).Utilise Array.get (pour récupérer le produit à l'indice 2)

 import { Product } from "./type";
 import { A, O } from "@mobily/ts-belt";
 
 const products: Product[] = [
   { name: 'Laptop', price: 1000, inStock: true },
   { name: 'Mouse', price: 25, inStock: false },
   { name: 'Keyboard', price: 75, inStock: true },
 ];
 
 export const ArrayFn8 = () => {
   const keyboardProduct = A.find(products, (product) => product.name === 'Keyboard');
   console.log("🚀 ~ ArrayFn8 ~ keyboardProduct:", keyboardProduct)
 
   const laptopIndex = A.getIndexBy(products, (product) => product.price === 1000);
   console.log("🚀 ~ ArrayFn8 ~ laptopIndex:", O.getWithDefault(laptopIndex, -1));
 
   const productAtIndex2 = A.get(products, 2);
   console.log("🚀 ~ ArrayFn8 ~ productAtIndex2:", productAtIndex2)
 };
 
