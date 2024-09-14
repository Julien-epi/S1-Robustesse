// // Exercice 2: Appliquer plusieurs prédicats et vérifier si tous sont satisfaitsFonctions à utiliser : allPass, tap, when, identityObjectif : Vérifie si un nombre est supérieur à 10 et pair. Si oui, affiche 'Validé', sinon retourne simplement la valeur d'origine avec identity.

import { F } from '@mobily/ts-belt';

export const functionFn2 = () => {
  const number = 12;

  const predicates = [
    (n: number) => n > 10,
    (n: number) => n % 2 === 0,
  ];

  const allPredicates = F.allPass(predicates);

  const logValid = F.tap<number>((n) => {
    console.log('valid');
  });

  const checkNumber = F.when<number, number>(allPredicates, logValid);

  const result = checkNumber(number);
  console.log("🚀 ~ functionFn2 ~ result:", result)
};
