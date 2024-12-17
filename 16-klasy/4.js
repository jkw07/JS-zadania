/* Rozbuduj obiekty typu Array o 2 nowe metody:

sum() która użyta dla danej tablicy numerów zwraca jej sumę.

[1,2,3].sum() === 6
sortNr() która poprawnie sortuje tablicę liczb

[1,1.2,11,22,2.1].sortNr() === [1,1.2,2.1,11,22] */

Array.prototype.sum = function () {
  return this.reduce((acc, num) => acc + num);
};

const sum = [1, 2, 3].sum();
console.log(sum);

Array.prototype.sortNr = function () {
  return this.sort((a, b) => a - b);
};

const sorted = [1, 1.2, 11, 22, 2.1].sortNr();
console.log(sorted);
