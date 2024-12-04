/*## Zadanie 13
--------------------------
Stwórz funkcję `monthName(nr)`, która będzie przyjmować tylko jeden atrybut - numer miesiąca. Funkcja powinna sprawdzić czy numer miesiąca jest prawidłowy (1-12). Jeżeli tak jest powinna zwrócić nazwę miesiąca w języku polskim. Wykorzystaj tutaj tablicę miesięcy. Jeżeli przekazana wartość jest spoza zakresu albo nie jest liczbą, funkcja powinna zwrócić false.

```
input : monthName(10)
wynik : październik

input : monthName("ala")
wynik : false*/

function monthName(nr) {
  if (nr > 12 || nr < 1 || typeof nr !== "number") {
    return false;
  }
  const months = [
    "styczeń",
    "luty",
    "marzec",
    "kwiecień",
    "maj",
    "czerwiec",
    "lipiec",
    "sierpień",
    "wrzesień",
    "październik",
    "listopad",
    "grudzień",
  ];
  return months[nr - 1];
}

console.log(monthName(10));
