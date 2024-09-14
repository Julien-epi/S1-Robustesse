// // Exercice 4: Inverser un Result et gérer l'erreurFonctions à utiliser : flip, mapError, recoverObjectif : Inverser les valeurs Ok et Error d'un Result, transformer l'erreur en ajoutant un message personnalisé, puis récupérer une valeur par défaut.

import { R } from "@mobily/ts-belt";

export const resultFn4 = () => {
    const result = R.fromNullable<null, string>(null, "Erreur");

    const errorHandledResult = R.mapError(
      result,
      (err: string) => `${err} - Résolu`
    );
    
    const flippedResult = R.flip(errorHandledResult);
    
    const finalResult = R.recover(flippedResult, "Valeur par défaut");
    console.log("🚀 ~ resultFn4 ~ finalResult:", finalResult)
    
};

resultFn4();