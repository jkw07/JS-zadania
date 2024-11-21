/*Za pomocą funkcji `prompt()` pobierz od użytkownika jego imię.
Napisz funkcję `fixName(name)`, do której przekażesz przekazane imię.
Funkcja powinna zwrócić poprawione imię, które będzie pisane małymi literami i rozpoczynało się od dużej litery.
Wykorzystaj tą funkcję do wypisania w konsoli tekstu `"Imię Piotr rozpoczyna się od litery P"`.
Jeżeli użytkownik nic nie wpisze, w konsoli wpisz tylko tekst `"nic nie wpisano"`.
```
input: "ania"
wynik:
Imię Ania rozpoczyna się od litery A*/

const userInput = prompt("Podaj swoje imie");
function fixName(name) {
    if (!name) {
        console.log("Nic nie wpisano");
    } else {
        const fixedName = name[0].toUpperCase() + name.slice(1).toLowerCase();
        console.log(`Imię ${fixedName} zaczyna się od litery ${fixedName[0]}`);
        return fixedName;
    }
}
fixName(userInput);