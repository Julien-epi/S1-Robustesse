// // Exercice 1: Filtrer les produits selon une fonction de condition et calculer le prix totalObjectif : Tu dois passer une fonction de filtrage en argument et utiliser cette fonction pour ne conserver que certains produits. Ensuite, tu dois calculer la somme des prix des produits filtrés.Utilise Array.reduce (pour filtrer dynamiquement les produits en fonction de la fonction passée, et calculer la somme des prix).
import { A } from "@mobily/ts-belt";

interface Product {
  name: string;
  price: number;
  inStock: boolean;
}

const products: Product[] = [
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Mouse", price: 25, inStock: false },
  { name: "Keyboard", price: 75, inStock: true },
];

export const calculateTotalPrice = (
  products: Product[],
  filterFn: (product: Product) => boolean
): number => {
  return A.reduce(products, 0, (acc, product) => {
    if (filterFn(product)) {
      return acc + product.price;
    }
    return acc;
  });
};

export const ArrayFn26 = () => {
  const filterInStock = (product: Product) => product.inStock;
  const totalPrice = calculateTotalPrice(products, filterInStock);
  console.log("🚀 ~ ArrayFn26 ~ totalPrice:", totalPrice)
};