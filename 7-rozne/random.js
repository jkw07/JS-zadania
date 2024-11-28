/*Stwórz funkcję random(max), która będzie zwracać losową liczbę z zakresu 0 - max. 
Wykorzystaj tą funkcję do wygenerowania 20-elementowej tablicy. 
Posortuj tą tablicę, a następnie wypisz sumę oraz średnią wszystkich liczb z tej tablicy.*/

function random(max) {
  return Math.floor(Math.random() * (max + 1));
}
const max = 2;
const array = new Array(20).fill(0).map(() => random(max));
const sortedArray = [...array].sort((a, b) => a - b);
const sum = array.reduce((acc, number) => acc + number, 0);
const average = sum / array.length;

console.log(
  `Przedział liczb od 0 do ${max}. 
  Wygenerowana tablica: ${array}. 
  Posortowana tablica: ${sortedArray}. 
  Suma: ${sum}. 
  Średnia: ${average}.`
);
