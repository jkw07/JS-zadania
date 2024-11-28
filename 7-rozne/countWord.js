/*Napisz funkcję `countWord(txt)`, która wymagać będzie tekstu.
Funkcja powinna zwrócić liczbę słów z ilu składa się przekazany tekst.
Następnie użyj jej do wypisania tekstu:
`"Tekst 'tutaj twój przykładowy tekst' składa się z 4 wyrazów"`
Przykładowy tekst pobierz od użytkownika za pomocą funkcji `prompt()`.
Jeżeli użytkownik nic nie wpisze, wypisz w konsoli tekst `nie mam co liczyć`.

```
input: "Koty to fajne zwierzaki"
wynik:
Tekst "Koty to fajne zwierzaki" składa się z 4 wyrazów"*/

const txt = prompt("Podaj jakies slowo");
if (txt == false) {
  console.log("Nie mam co liczyc");
} else {
  console.log(`Twoje slowo ${txt} ma ${txt.length} liter`);
}

//LUB

/*const txt = prompt("podaj jakies slowo");
function countWords(txt) {
    txt == false ? console.log("nie mam czego liczyc") : console.log(`Twoje slowo ${txt} ma ${txt.length} liter`);
}
countWords(txt);*/

//SLOW NIE LITER
