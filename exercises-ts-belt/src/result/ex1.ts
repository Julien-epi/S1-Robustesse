// // Exercice 1: Transformer une exécution en Result, appliquer une transformation, puis obtenir la valeur par défautFonctions à utiliser : fromExecution, map, getWithDefaultObjectif : Transformer une exécution en Result, appliquer une transformation qui multiplie la valeur par 2, puis récupérer une valeur par défaut si l'exécution échoue.

import { R } from "@mobily/ts-belt";

const riskyFunction = (): number => {
  if (Math.random() > 0.5) {
    return 100;
  }
  throw new Error("Erreur");
};

export const resultFn1 = (): number => {
  const result = R.fromExecution(riskyFunction);
  console.log("🚀 ~ resultFn1 ~ result:", result)
  const doubled = R.map(result, (value) => value * 2);
  const totalresult = R.getWithDefault(doubled, 0);
  console.log("🚀 ~ resultFn1 ~ totalresult:", totalresult)
  return totalresult;
};

