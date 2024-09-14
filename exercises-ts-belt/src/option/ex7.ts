// // Exercice 7: Transformer une option falsy en valeur par défaut et l'utiliser avec un tupleFonctions à utiliser : fromFalsy, getWithDefault, zipObjectif : Créer une option à partir d'une valeur falsy, récupérer la valeur par défaut 'Inconnu', puis l'associer à une autre option pour former un tuple.

import { O } from "@mobily/ts-belt";

export const optionFn7 = () => {
  const value = "";
  const option2 = O.fromNullable("Validé");
  const option1 = O.fromFalsy<string>(value);
  const defaultOption1 = O.getWithDefault(option1, "Inconnu");
  const tupleOption = O.zip(O.fromNullable(defaultOption1), option2);
  console.log("🚀 ~ optionFn7 ~ tupleOption:", tupleOption)
};

optionFn7();