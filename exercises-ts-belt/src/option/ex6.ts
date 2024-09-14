// // Exercice 6: Créer une option à partir d'une promesse, appliquer une fonction, et récupérer la valeur avec une exceptionFonctions à utiliser : fromPromise, map, getExnObjectif : Créer une option à partir d'une promesse, appliquer une transformation qui ajoute ' reçu' au résultat, puis extraire la valeur avec exception.

import { O } from "@mobily/ts-belt";

const fetchData = async () => {
  if (Math.random() > 0.5) {
    return "Données";
  }
  throw new Error("Erreur");
};

export const optionFn6 = async () => {
  const option = await O.fromPromise(fetchData());

  const transformedOption = O.map(option, (data: string) => `${data} reçu`);

  try {
    const value = O.getExn(transformedOption);
    console.log("🚀 ~ optionFn6 ~ value:", value)
  } catch (error) {
  console.log("🚀 ~ optionFn6 ~ error:", error)
  }
};

optionFn6();