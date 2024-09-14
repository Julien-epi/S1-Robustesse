// // Exercice 5: Manipuler un Result à partir d'une exécution et convertir en optionFonctions à utiliser : fromExecution, map, toOptionObjectif : Transformer une exécution en Result, appliquer une transformation, puis convertir le résultat en option.

import { R } from "@mobily/ts-belt";

const riskyFunction = () => {
  if (Math.random() > 0.5) {
    return 150;
  }
  throw new Error("Erreur");
};

export const resultFn5 = () => {
  const result = R.fromExecution(riskyFunction);
  console.log("🚀 ~ resultFn5 ~ result:", result)

  const transformedResult = R.map(result, (val: number) => val * 2);
  console.log("🚀 ~ resultFn5 ~ transformedResult:", transformedResult)

  const option = R.toOption(transformedResult);
  console.log("🚀 ~ resultFn5 ~ option:", option)
};

resultFn5();