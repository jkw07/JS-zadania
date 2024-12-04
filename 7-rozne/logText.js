/*## Zadanie 17
--------------------------
Napisz funkcję `log(txt)`, która będzie służyć do wypisywania tekstu w konsoli. 
Tekst powinien być poprzedzony numerem np. `1. To jest przykładowy tekst`. 
Numer powinien się automatycznie zwiększać przy każdorazowym użyciu tej funkcji. 
Nie wolno ci tutaj użyć zmiennej globalnej, a zamiast niej odpowiednich domknięć.*/

function log(txt) {
  let number = 0;
  return (txt) => {
    number++;
    console.log(`${number}. ${txt}`);
  };
}
const text = log();
text("to jest przykladowy tekst");
text("to jest drugi tekst");
text("to jest trzeci tekst");
