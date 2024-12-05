/* Stwórz obiekt o nazwie text. Obiekt ten powinien mieć metody:

check(txt, word)
która zwraca true/false jeżeli w tekście txt znajduje się szukane słowo word
check("ala ma kota", "kota")
---> true

getCount(txt)
Zwraca liczbę liter w tekście txt. Uwaga znaki interpunkcyjne też traktujmy jako litery
getCount("ala ma kota")
---> 11

getWordsCount(txt)
zwraca liczbę słów w przekazanym tekście
getWordsCount("Ala ma kota")
---> 3

setCapitalize(txt)
zwraca nowy tekst tak zamieniony, że każde słowo zaczyna się z dużej litery
setCapitalize("ala ma kota")
---> "Ala Ma Kota"

setMix(txt)
zwraca nowy tekst z naprzemiennie dużymi/małymi literami. Spację i znaki interpunkcyjne traktujemy jako litery.
setMix("ala ma kota")
---> "aLa mA KoTa"

generateRandom(lng)
Generuje tekst o długości lng, który składa się z losowych liter
generateRandom(10)
---> "dkjiuhtjox" */

const text = {
  check(txt, word) {
    return txt.includes(word);
  },
  getCount(txt) {
    return txt.length;
  },
  getWordsCount(txt) {
    return txt.split(" ").length;
  },
  setCapitalize(txt) {
    return txt
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  },
  setMix(txt) {
    return txt
      .toLowerCase()
      .split("")
      .map((el, index) =>
        index % 2 === 0 ? el.toLowerCase() : el.toUpperCase()
      )
      .join("");
  },
  generateRandom(lng) {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return new Array(lng)
      .fill("")
      .map((_) => chars[Math.floor(Math.random() * (chars.length - 1))])
      .join("");
  },
};

console.log(text.check("Ala ma kota", "kota"));
console.log(text.getCount("Ala ma kota"));
console.log(text.getWordsCount("Ala ma kota"));
console.log(text.setCapitalize("Ala ma kota"));
console.log(text.setMix("Ala ma kota"));
console.log(text.generateRandom(10));
