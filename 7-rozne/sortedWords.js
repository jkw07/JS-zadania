/*## Zadanie 9
--------------------------
Mamy przykładowy tekst:
```
const str = "Ania|Marcin|Bartek|Piotr|Kuba|Beata|Agnieszka";
```
Napisz funkcję, która przyjmie 2 atrybuty:
- tekst
- znak rozdziału (np. `|`)
Skorzystaj z odpowiedniej metody, tak aby rozdzielić przekazany do funkcji tekst na części za pomocą przekazanego znaku rozdziału. W wyniku rozdzielenia powinieneś dostać tablicę. Funkcja niech posegreguje tą tablicę alfabetycznie. 
Następnie funkcja niech połączy tą tablicę w nowy tekst wstawiając między imiona znak wcześniejszego rozdziału. Skorzystaj tutaj z innej odpowiedniej metody js.
```
input: "Ania|Marcin|Bartek"
wynik:
"Ania|Bartek|Marcin"
```*/

const str = "Ania|Marcin|Bartek|Piotr|Kuba|Beata|Agnieszka";

function sortedWords(text, separator) {
  return text.split(separator).sort().join(separator);
}

console.log(str);
console.log(sortedWords(str, "|"));
