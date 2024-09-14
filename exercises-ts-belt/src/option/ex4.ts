// // Exercice 4: Vérifier une option, appliquer une transformation, puis obtenir le résultat sous forme nullableFonctions à utiliser : fromNullable, isSome, map, toNullableObjectif : Créer une option à partir d'une valeur, vérifier si elle est présente, appliquer une transformation en augmentant de 10%, puis retourner cette option sous forme nullable.

import { O } from "@mobily/ts-belt";

export const optionFn4 = () => {
  const value = 1000;

  const option = O.fromNullable(value);

  if (O.isSome(option)) {
  console.log("🚀 ~ optionFn4 ~ option:", option)
  } else {
    console.log("Aucune value");
  }

  const transformedOption = O.map(option, (val: number) => val * 1.1);
  console.log("🚀 ~ optionFn4 ~ transformedOption:", transformedOption)
  const nullableResult = O.toNullable(transformedOption);
  console.log("🚀 ~ optionFn4 ~ nullableResult:", nullableResult)

};

optionFn4();