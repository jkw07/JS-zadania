/*Napisz funkcję `printNumbers(nr)`, która wymagać będzie liczby.
Funkcja powinna zwrócić tekst, który będzie składał się z kolejnych liczb.

```
input: printNumbers(12)
wynik: "123456789101112"*/

const userInput = prompt("Podaj liczbe");

function printNumbers(number) {
    if (!number) {
        console.log("Nic nie wpisano");
    } else {
        numbers = number;
        for (let i = 0; i < 20; i++) {
            numbers += Math.floor(Math.random() * 10);
        }
        return numbers;
    }
}
printNumbers(userInput);
console.log(numbers);