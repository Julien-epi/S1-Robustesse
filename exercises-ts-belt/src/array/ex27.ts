// // Exercice 2: Créer un tableau de produits répondant à plusieurs critères définis par des fonctionsObjectif : Tu dois recevoir une série de fonctions comme argument qui définissent des critères de sélection. Ensuite, tu dois filtrer et retourner une nouvelle liste de produits qui satisfont tous les critères.Utilise Array.reduce (pour vérifier que chaque produit satisfait à toutes les fonctions de condition passées en argument, et les ajouter à une nouvelle liste).

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

export const filterProducts = (
  products: Product[],
  conditions: Array<(product: Product) => boolean>
): Product[] => {
  return A.reduce(products, [] as Product[], (acc, product) => {
    const satisfiesAllConditions = A.every(conditions, (condition) =>
      condition(product)
    );

    if (satisfiesAllConditions) {
      acc.push(product);
    }

    return acc;
  });
};

export const ArrayFn27 = () => {
  const conditions = [
    (product: Product) => product.price > 50,
    (product: Product) => product.inStock,
  ];

  const filteredProducts = filterProducts(products, conditions);
  console.log("🚀 ~ ArrayFn27 ~ filteredProducts:", filteredProducts)
};