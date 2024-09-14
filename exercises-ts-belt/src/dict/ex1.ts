// Exercice 1: Supprimer une clé d'un objetFonctions à utiliser : deleteKey, get Objectif : Supprimer la clé 'price' de l'objet obj et vérifier que la valeur associée n'est plus accessible.

import { D, O } from '@mobily/ts-belt';

interface Product {
  name: string;
  price: number;
  stock: boolean;
}

type ProductWithoutPrice = Omit<Product, 'price'> & { price?: number };

const objf: Product = { name: "Laptop", price: 1000, stock: true };

export const DictFn1 = () => {
  const objWithoutPrice: ProductWithoutPrice = D.deleteKey(objf, 'price');
  console.log("🚀 ~ DictFn1 ~ objWithoutPrice:", objWithoutPrice)

  const priceValue = D.get(objWithoutPrice, 'price');
  console.log("🚀 ~ DictFn1 ~ priceValue:", priceValue)

  const isPricePresent = O.isSome(priceValue);
  console.log("🚀 ~ DictFn1 ~ isPricePresent:", isPricePresent)
};
