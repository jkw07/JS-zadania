/*## Zadanie 15
--------------------------
Napisz funkcję `mix(txt)`, która przyjmie dowolny tekst. Funkcja niech zwraca tekst, który ma zmiksowana wielkość liter np:

```
input -> Ala ma kota
output -> AlA Ma kOtA
```

Napisz dodatkowo 3 funkcje `smallNames(arr)`, `bigNames(arr)` i `mixNames(arr)`.
Każda z nich niech przyjmuje tablicę imion.
Pierwsza funkcja niech zwraca nową tablicę, w której imiona są zapisane małymi literami, druga dużymi, a trzecia zmiksowanymi literami.

```
input -> ["Ania" , "Marcin" , "Bartek" , "Piotr"]
output1 -> ["ania", "marcin", "bartek", "piotr"]
output2 -> ["ANIA" , "MARCIN" , "BARTEK" , "PIOTR"]
output3 -> ["AnIa" , "MaRcIn" , "BaRtEk" , "PiOtR"]
```*/

let text = "Ala ma kota";

function mix(txt) {
  return txt
    .split("")
    .map((letter) =>
      Math.random() < 0.5 ? letter.toLowerCase() : letter.toUpperCase()
    )
    .join("");
}

console.log(mix(text));

let names = ["Ania", "Marcin", "Bartek", "Piotr"];

function smallNames(arr) {
  return arr.map((letter) => letter.toLowerCase());
}

function bigNames(arr) {
  return arr.map((letter) => letter.toUpperCase());
}

function mixNames(arr) {
  return arr.map((name) =>
    name
      .split("")
      .map((letter) =>
        Math.random() < 0.5 ? letter.toLowerCase() : letter.toUpperCase()
      )
      .join("")
  );
}

console.log(names);
console.log(smallNames(names));
console.log(bigNames(names));
console.log(mixNames(names));
