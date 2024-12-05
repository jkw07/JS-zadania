/* Stwórz obiekt o nazwie tableGenerator. Obiekt ten powinien mieć tylko metody:

randomNumber(min, max)
zwraca losową liczbę z przedziału min-max

generateIncTable(nr)
zwraca nową tablicę z liczbami od 0 do nr

generateRandomTable(lng, min, max)
zwraca nową tablice o długości lng z losowymi liczbami z przedziału min-max

generateTableFromText(str)
generuje nową tablicę ze słowami z tekstu str Jeżeli przekazany tekst nie jest tekstem, wtedy powinna być zwrócona pusta tablica Wykorzystaj odpowiednią metodę dla String

getMaxFromTable(arr)
zwraca największą liczbę z tablicy arr

getMinFromTable(arr)
zwraca najmniejszą liczbę z tablicy arr

delete(arr, index) usuwa z tablicy arr element o indexie index */

const tableGenerator = {
  randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
  generateIncTable(nr) {
    return new Array(nr + 1).fill().map((_, index) => index);
  },
  generateRandomTable(lng, min, max) {
    return new Array(lng)
      .fill()
      .map(() => Math.floor(Math.random() * (max - min + 1) + min));
  },
  generateTableFromText(str) {
    return typeof str === "string" ? str.split(" ") : [];
  },
  getMaxFromTable(arr) {
    return Math.max(...arr);
  },
  getMinFromTable(arr) {
    return Math.min(...arr);
  },
  delete(arr, index) {
    return arr.toSpliced(index, 1);
  },
};
console.log(tableGenerator.randomNumber(0, 50));
console.log(tableGenerator.generateIncTable(5));
console.log(tableGenerator.generateRandomTable(5, 0, 100));
console.log(tableGenerator.generateTableFromText("Ala ma kota"));
console.log(tableGenerator.getMaxFromTable([5, 1, 6, 5, 54, 8, 7, 5, 22]));
console.log(tableGenerator.getMinFromTable([5, 1, 6, 12, 5, 8, 7, 5, 22]));
console.log(tableGenerator.delete([5, 0, 100], 1));
