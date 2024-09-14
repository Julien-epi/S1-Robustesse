// // Exercice 3: Aplatir deux Result, vérifier et récupérer une valeur par défautFonctions à utiliser : flatMap, recover, map, getWithDefaultObjectif : Aplatir deux Result avec flatMap, appliquer une transformation sur la valeur, puis récupérer une valeur par défaut si l'une des valeurs échoue.

// const result1 = R.fromNullable(100);
// const result2 = R.fromNullable(200);

import { R } from "@mobily/ts-belt";

export const resultFn3 = () => {
  const result1 = R.fromNullable<number, string>(100, "Unknown");
  const result2 = R.fromNullable<number, string>(200, "Unknown");

  const combinedResult = R.flatMap(result1, (val1: number) =>
    R.map(result2, (val2: number) => val1 + val2)
  );

  const recoveredResult = R.recover(combinedResult, 0);
  const transformedResult = R.map(recoveredResult, (val: number) => val * 2);
  const finalValue = R.getWithDefault(transformedResult, 50);
  console.log("🚀 ~ resultFn3 ~ finalValue:", finalValue)

};

resultFn3();