/*Stwórz tablicę z 6 losowymi zwierzakami. Napisz funkcję showArray(arr), która wypisze kolejne elementy przekazanej tablicy. 
Zrób to na trzy sposoby za pomocą pętli for, for of oraz metody forEach. 
Dodatkowo wypisz długość każdego słowa a na końcu sumę wszystkich liter występujących w tablicy.*/

const animals = ["lama", "borsuk", "chomik", "kot", "pies", "maskonur"];
let totalLetters1 = 0;
let totalLetters2 = 0;

//1 sposob
for (let i = 0; i < animals.length; i++) {
  console.log(`1.Zwierzę: ${animals[i]}, długość liter: ${animals[i].length}`);
  totalLetters1 += animals[i].length;
}
console.log(`1.Suma liter w tablicy to: ${totalLetters1}`);

//2 sposob
for (const animal of animals) {
  totalLetters2 += animal.length;
  console.log(`2.Zwierzę: ${animal}, długość liter: ${animal.length}`);
}
console.log(`2.Suma liter w tablicy to: ${totalLetters2}`);

//3 sposob
animals.forEach((animal) =>
  console.log(`3.Zwierzę: ${animal}, długość liter: ${animal.length}`)
);
const totalLetters3 = animals.reduce((sum, word) => sum + word.length, 0);
const totalLetters4 = animals.join("").length;
console.log(`3.Suma liter w tablicy to: ${totalLetters3}`);
console.log(`4.Suma liter w tablicy to: ${totalLetters4}`);
