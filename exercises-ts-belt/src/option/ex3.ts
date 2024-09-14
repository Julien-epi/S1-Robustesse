// // Exercice 3: Associer deux options et appliquer une fonctionFonctions à utiliser : fromNullable, zipWith, mapObjectif : Associer deux options, puis utiliser une fonction pour ajouter les deux valeurs ensemble, et enfin transformer le résultat pour afficher une chaîne.

import { O } from "@mobily/ts-belt";

export const optionFn3 = () => {
  const value1 = 100;
  const value2 = 50;

  const option1 = O.fromNullable(value1);
  const option2 = O.fromNullable(value2);

  const combinedOption = O.zipWith(
    option1,
    option2,
    (val1, val2) => val1 + val2
  );

  const finalResult = O.map(combinedOption, (sum) => `La somme est : ${sum}`);

  const finalValue = O.getWithDefault(finalResult, "Valeurs manquantes");
  console.log("🚀 ~ optionFn3 ~ finalValue:", finalValue)
};

optionFn3();