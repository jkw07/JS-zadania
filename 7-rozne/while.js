/*## Zadanie 11
--------------------------
Mamy dwie zmienne:
```
const min = 1;
const max = 1000;
```
Za pomocą `prompt()` pobierz od użytkownika liczbę z przedziału `min-max`. Pamiętaj, że `prompt()` zwraca zawsze tekst, więc skonwertuj go na liczbę.
Jeżeli użytkownik poda liczbę spoza przedziału lub podana wartość nie będzie liczbą, wypisz w konsoli `podana wartość jest błędna`.

Wewnątrz pętli while generuj losową liczbę z przedziału `min-max` (możesz wykorzystać funkcję z poprzedniego zadania).
Wypisz w konsoli ile wykonało się iteracji, aż wylosowana liczba była równa tej, którą podał użytkownik. 
Pętlę while możesz przerwać warunkiem w jej nawiasach albo słowem `break`.*/

const min = 1;
const max = 1000;

const input = prompt(`Podaj liczbe z przedziału od ${min} do ${max}`);

function howMany(userInput) {
  const userNumber = Number(userInput);
  if (isNaN(userNumber) || userNumber > max || userNumber < min) {
    console.log("Podana wartosc jest błędna");
    return;
  };
  let randomNumber = null;
  let i = 0;
  while (randomNumber !== userNumber) {
    randomNumber = Math.floor(Math.random()*(max-min+1)+min);
    i++;
  }
    return i;
};
console.log(howMany(input))