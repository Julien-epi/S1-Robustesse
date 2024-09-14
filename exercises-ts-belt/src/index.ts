import * as ArrayFns from './array';
import * as DictFns from './dict';
import * as FunctionFns from './function';
import * as OptionFns from './option';
import * as ResultFns from './result';

const arrayExercises = [
  { name: 'Exercice 1', fn: ArrayFns.ArrayFn1 },
  { name: 'Exercice 2', fn: ArrayFns.ArrayFn2 },
  { name: 'Exercice 3', fn: ArrayFns.ArrayFn3 },
  { name: 'Exercice 4', fn: ArrayFns.ArrayFn4 },
  { name: 'Exercice 5', fn: ArrayFns.ArrayFn5 },
  { name: 'Exercice 6', fn: ArrayFns.ArrayFn6 },
  { name: 'Exercice 7', fn: ArrayFns.ArrayFn7 },
  { name: 'Exercice 8', fn: ArrayFns.ArrayFn8 },
  { name: 'Exercice 9', fn: ArrayFns.ArrayFn9 },
  { name: 'Exercice 10', fn: ArrayFns.ArrayFn10 },
  { name: 'Exercice 20', fn: ArrayFns.ArrayFn20 },
  { name: 'Exercice 21', fn: ArrayFns.ArrayFn21 },
  { name: 'Exercice 22', fn: ArrayFns.ArrayFn22 },
  { name: 'Exercice 23', fn: ArrayFns.ArrayFn23 },
  { name: 'Exercice 24', fn: ArrayFns.ArrayFn24 },
  { name: 'Exercice 25', fn: ArrayFns.ArrayFn25 },
  { name: 'Exercice 26', fn: ArrayFns.ArrayFn26 },
  { name: 'Exercice 27', fn: ArrayFns.ArrayFn27 },
  { name: 'Exercice 28', fn: ArrayFns.ArrayFn28 },
  { name: 'Exercice 29', fn: ArrayFns.ArrayFn29 },
  { name: 'Exercice 30', fn: ArrayFns.ArrayFn30 },
];

const dictExercises = [
  { name: 'Exercice 1', fn: DictFns.DictFn1 },
  { name: 'Exercice 2', fn: DictFns.DictFn2 },
  { name: 'Exercice 3', fn: DictFns.DictFn3 },
  { name: 'Exercice 4', fn: DictFns.DictFn4 },
  { name: 'Exercice 5', fn: DictFns.DictFn5 },
  { name: 'Exercice 6', fn: DictFns.DictFn6 },
  { name: 'Exercice 7', fn: DictFns.DictFn7 },
];

const functionExercises = [
  { name: 'Exercice 1', fn: FunctionFns.functionFn1 },
  { name: 'Exercice 2', fn: FunctionFns.functionFn2 },
  { name: 'Exercice 3', fn: FunctionFns.functionFn3 },
  { name: 'Exercice 4', fn: FunctionFns.functionFn4 },
];

const optionExercises = [
  { name: 'Exercice 1', fn: OptionFns.optionFn1 },
  { name: 'Exercice 2', fn: OptionFns.optionFn2 },
  { name: 'Exercice 3', fn: OptionFns.optionFn3 },
  { name: 'Exercice 4', fn: OptionFns.optionFn4 },
  { name: 'Exercice 5', fn: OptionFns.optionFn5 },
  { name: 'Exercice 6', fn: OptionFns.optionFn6 },
  { name: 'Exercice 7', fn: OptionFns.optionFn7 },
];

const resultExercises = [
  { name: 'Exercice 1', fn: ResultFns.resultFn1 },
  { name: 'Exercice 2', fn: ResultFns.resultFn2 },
  { name: 'Exercice 3', fn: ResultFns.resultFn3 },
  { name: 'Exercice 4', fn: ResultFns.resultFn4 },
  { name: 'Exercice 5', fn: ResultFns.resultFn5 },
  { name: 'Exercice 6', fn: ResultFns.resultFn6 },
  { name: 'Exercice 7', fn: ResultFns.resultFn7 },
];

const runExercises = (
  categoryName: string,
  exercises: { name: string; fn: Function }[]
) => {
  console.log(`\nExécution des exercices de ${categoryName} :`);
  exercises.forEach((exercise) => {
    console.log(`Exécution de ${exercise.name} :`);
    exercise.fn();
  });
};

runExercises('ARRAY', arrayExercises);

runExercises('Dict', dictExercises);

runExercises('Functions', functionExercises);

runExercises('Option', optionExercises);

runExercises('Result', resultExercises);
