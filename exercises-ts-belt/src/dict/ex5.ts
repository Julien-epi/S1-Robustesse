// // Exercice 5: Créer un objet à partir d'un tableau de pairesFonctions à utiliser : fromPairs, toPairsObjectif : Transformer un tableau de paires [clé, valeur] en un objet, puis vérifier en retournant le tableau des paires.

import { D } from '@mobily/ts-belt';

type Pair = [string, any]; 
type Product = {
  name: string;
  price: number;
  stock: boolean;
};

export const DictFn5 = () => {
  const pairs: Pair[] = [['name', 'Laptop'], ['price', 1000], ['stock', true]];

  const obj: Product = D.fromPairs(pairs) as Product;
  console.log("🚀 ~ DictFn5 ~ obj:", obj)

  const newPairs = D.toPairs(obj);
  console.log("🚀 ~ DictFn5 ~ newPairs:", newPairs)

  const arePairsEqual = JSON.stringify(pairs) === JSON.stringify(newPairs);
  console.log("🚀 ~ DictFn5 ~ arePairsEqual:", arePairsEqual)
};
