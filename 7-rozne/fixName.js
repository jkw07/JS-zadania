/*Za pomocą funkcji `prompt()` pobierz od użytkownika jego imię.
Napisz funkcję `fixName(name)`, do której przekażesz przekazane imię.
Funkcja powinna zwrócić poprawione imię, które będzie pisane małymi literami i rozpoczynało się od dużej litery.
Wykorzystaj tą funkcję do wypisania w konsoli tekstu `"Imię Piotr rozpoczyna się od litery P"`.
Jeżeli użytkownik nic nie wpisze, w konsoli wpisz tylko tekst `"nic nie wpisano"`.
```
input: "ania"
wynik:
Imię Ania rozpoczyna się od litery A*/

function fixName(name) {
  const fixedName = name[0].toUpperCase() + name.slice(1).toLowerCase();
  return fixedName;
}

const userInput = "ania";
if (!userInput) {
  console.log("Nic nie wpisano");
} else {
  const fixedName = fixName(userInput);
  console.log(`Imię ${fixedName} zaczyna się od litery ${fixedName[0]}`);
}
