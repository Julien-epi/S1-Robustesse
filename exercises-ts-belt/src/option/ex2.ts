// // Exercice 2: Transformer une option à partir d'un prédicat, puis extraire une valeurFonctions à utiliser : fromPredicate, map, getWithDefaultObjectif : Créer une option à partir d'un prédicat (valeur > 50), transformer cette option en multipliant la valeur par 2, puis obtenir une valeur par défaut de 0 si l'option est vide.

import { O } from "@mobily/ts-belt";

export const optionFn2 = () => {
  const value = 75;
  const option = O.fromPredicate((val: number) => val > 50)(value);
  const transformedOption = O.map(option, (val: number) => val * 2);
  const finalValue = O.getWithDefault(transformedOption, 0);
  console.log("🚀 ~ optionFn2 ~ finalValue:", finalValue)

};

optionFn2();
