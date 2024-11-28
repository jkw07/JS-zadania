/*Jako poszukiwacz przygód, doszedłeś do tajemniczej komnaty, na ścianie której znajduje się tajemniczy zapis:

const arr = [
	[ 66,  97, 114, 100,   4,   2, 110,  11,   1,   6,  20, ],
	[ 99,   3,  10, 122,  76, 101, 111,   3,  32, 100,   0, ],
	[  6,  22,   1, 111,  32,  10, 110,   7,  97,  97,  67, ],
	[ 60,  97, 116,  32, 100,  23,  97, 114, 100,  32,  34, ],
	[  2, 106,  15,   6, 111,  56,  80,  20,  10,  86,  10, ],
	[ 20, 110,  121, 32, 107,  55,  50,  99, 110, 105,   8, ],
	[ 12,   9,  22, 102,  66, 100,  12, 105,  50,  76, 110, ],
	[ 42,  81, 123,  92,  26,  98,  20,   1,  20,  11,  10, ],
]
W starych notatkach znajdujesz tylko krótki ciąg, który ponoć wskazuje kierunek poruszania się po powyższym zapisie.

const str = "rrrdddllddrrruuuurrddrruurddddlld";
Twoim zadaniem jest zdekodować ukrytą informację. Dekodowanie rozpoczynasz w lewym górnym rogu, a następnie powinieneś się poruszać zgodnie z literami, 
gdzie r oznacza prawo, d dół, l lewo, a u górę.

Po pobraniu kodów z odpowiednich miejsc zamień je na litery za pomocą String.fromCharCode(x). Wynikiem powinien być wypisane w konsoli hasło.*/

const arr = [
	[ 66,  97, 114, 100,   4,   2, 110,  11,   1,   6,  20, ],
	[ 99,   3,  10, 122,  76, 101, 111,   3,  32, 100,   0, ],
	[  6,  22,   1, 111,  32,  10, 110,   7,  97,  97,  67, ],
	[ 60,  97, 116,  32, 100,  23,  97, 114, 100,  32,  34, ],
	[  2, 106,  15,   6, 111,  56,  80,  20,  10,  86,  10, ],
	[ 20, 110,  121, 32, 107,  55,  50,  99, 110, 105,   8, ],
	[ 12,   9,  22, 102,  66, 100,  12, 105,  50,  76, 110, ],
	[ 42,  81, 123,  92,  26,  98,  20,   1,  20,  11,  10, ],
]
const str = "rrrdddllddrrruuuurrddrruurddddlld";

let x = 0;
let y = 0;
let result = String.fromCharCode(arr[0][0]);

for (let char of str) {
    if (char === "r") y++;
    else if (char === "l") y--;
    else if (char === "d") x++;
    else if (char === "u") x--;
    result += String.fromCharCode(arr[x][y]);
}

console.log(result);

/*Stwórz tablicę z 6 losowymi zwierzakami. Napisz funkcję showArray(arr), która wypisze kolejne elementy przekazanej tablicy. 
Zrób to na trzy sposoby za pomocą pętli for, for of oraz metody forEach. 
Dodatkowo wypisz długość każdego słowa a na końcu sumę wszystkich liter występujących w tablicy.*/

const animals = ["lama","borsuk","chomik","kot","pies","maskonur"]
let totalLetters1 = 0;
let totalLetters2= 0;

for ( let i=0; i < animals.length; i++) {
  console.log(`1.Zwierzę: ${animals[i]}, długość liter: ${animals[i].length}`);
  totalLetters1 += animals[i].length;
}
console.log(`1.Suma liter w tablicy to: ${totalLetters1}`)
  
  
for (const animal of animals) {
    totalLetters2 += animal.length;
    console.log(`2.Zwierzę: ${animal}, długość liter: ${animal.length}`);
}
console.log(`2.Suma liter w tablicy to: ${totalLetters2}`);

animals.forEach(animal => console.log(`3.Zwierzę: ${animal}, długość liter: ${animal.length}`))
const totalLetters3 = animals.reduce((sum, word) => sum + word.length, 0);
const totalLetters4 = animals.join("").length;
console.log(`3.Suma liter w tablicy to: ${totalLetters3}`);
console.log(`4.Suma liter w tablicy to: ${totalLetters4}`);
