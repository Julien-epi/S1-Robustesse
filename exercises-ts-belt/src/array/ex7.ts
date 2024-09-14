import { Product } from "./type";
import { A, O } from "@mobily/ts-belt";

const products: Product[] = [
  { name: 'Laptop', price: 1000, inStock: true },
  { name: 'Mouse', price: 25, inStock: false },
  { name: 'Keyboard', price: 75, inStock: true },
  { name: 'Monitor', price: 200, inStock: true },
  { name: 'Headphones', price: 50, inStock: false },
];

export const ArrayFn7 = () => {
  const inStockProducts = A.filter(products, (product: Product) => product.inStock);

  const evenIndexProducts = A.filter(A.zipWithIndex(products), ([_, index]) => index % 2 === 0).map(([product]) => product);

  const inStockProductsPrices = A.filterMap(products, (product: Product) => {
    return product.inStock ? O.Some(product.price) : O.None;
  });

  console.log("🚀 ~ ArrayFn7 ~ inStockProductsPrices:", inStockProductsPrices);
  console.log("🚀 ~ ArrayFn7 ~ evenIndexProducts:", evenIndexProducts);
  console.log("🚀 ~ ArrayFn7 ~ inStockProducts:", inStockProducts);
};
