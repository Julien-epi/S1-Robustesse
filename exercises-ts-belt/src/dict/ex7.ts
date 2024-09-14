// // Exercice 7: Vérifier si un objet est vide après suppression de ses clésFonctions à utiliser : deleteKeys, isEmptyObjectif : Supprimer toutes les clés de l'objet obj et vérifier si l'objet résultant est vide.

import { D } from '@mobily/ts-belt';

type Product = {
  name: string;
  price: number;
  stock: boolean;
};

export const DictFn7 = () => {
  const obj: Product = { name: 'Laptop', price: 1000, stock: true };

  const keys = D.keys(obj);

  const emptyObj = D.deleteKeys(obj, keys) as {};
  console.log("🚀 ~ DictFn7 ~ emptyObj:", emptyObj)


  const isEmpty = D.isEmpty(emptyObj);
  console.log("🚀 ~ DictFn7 ~ isEmpty:", isEmpty)
};
