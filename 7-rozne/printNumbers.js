/*Napisz funkcję `printNumbers(nr)`, która wymagać będzie liczby.
Funkcja powinna zwrócić tekst, który będzie składał się z kolejnych liczb.

```
input: printNumbers(12)
wynik: "123456789101112"*/

const userInput = "12";

function printNumbers(number) {
  if (!number) {
    console.log("Nic nie wpisano");
  } else {
    let numbers = "";
    for (let i = 0; i < number; i++) {
      numbers += i;
    }
    return numbers;
  }
}
printNumbers(userInput);
console.log(numbers);
