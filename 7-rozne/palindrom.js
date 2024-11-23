/*## Zadanie 14
--------------------------
Napisz funkcję `checkPalindrom(txt)`, która zwróci true/false w zależności od tego, czy przekazane słowo jest palindromem.
Przykładowo słowo `kajak` to palindrom, ale już `pies` nim nie jest.*/

const text = prompt("Podaj slowo");

function checkPalindrom(txt) {
  const reversed = txt.split("").reverse().join("");
  return txt === reversed;
}

console.log(checkPalindrom(text));