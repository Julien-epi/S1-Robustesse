// // Exercice 4: Générer un rapport en regroupant les produits selon des critères définis par l'utilisateurObjectif : Tu dois recevoir une fonction qui définit comment regrouper les produits (par exemple, par nom, prix, ou catégorie). Le rapport doit inclure les produits regroupés avec une somme des quantités par groupe.Utilise Array.reduce (pour grouper les produits en fonction de la fonction passée en argument et calculer la quantité totale pour chaque groupe).

import { A } from "@mobily/ts-belt";

interface Product {
  name: string;
  price: number;
  category: string;
  quantity: number;
}

interface GroupedProducts {
  products: Product[];
  totalQuantity: number;
}

const products: Product[] = [
  { name: "Laptop", price: 1000, category: "Electronics", quantity: 2 },
  { name: "Mouse", price: 25, category: "Accessories", quantity: 5 },
  { name: "Monitor", price: 200, category: "Electronics", quantity: 1 },
];

export const generateReport = (
  products: Product[],
  groupBy: (product: Product) => string
): Record<string, GroupedProducts> => {
  return A.reduce(
    products,
    {} as Record<string, GroupedProducts>,
    (acc, product) => {
      const groupKey = groupBy(product);

      if (!acc[groupKey]) {
        acc[groupKey] = { products: [], totalQuantity: 0 };
      }

      acc[groupKey].products.push(product);
      acc[groupKey].totalQuantity += product.quantity;

      return acc;
    }
  );
};

export const ArrayFn29 = () => {
  const groupByCategory = (product: Product) => product.category;
  const report = generateReport(products, groupByCategory);
  console.log("🚀 ~ ArrayFn29 ~ report:", report)
};