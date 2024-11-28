/*## Zadanie 12
--------------------------
Napisz funkcję `checkFemale(name)`, która sprawdza przekazane do niej imię.
Funkcja powinna zwracać prawdę lub fałsz w zależności od tego czy przekazane imię kończy się na literę `"a"`.
Przykładowo:

```
checkFemale("Ania") === true
checkFemale("Marcin") === false
```

Napisz funkcję `countWomanInTable(arr)`, do której przekażesz tablicę użytkowników, którą masz poniżej.
Funkcja powinna sprawdzić każdego użytkownika w tablicy i zwrócić ile jest kobiet.
Wykorzystaj tutaj powyższą funkcję. Do pobrania imienia możesz wykorzystać funkcję `split()`.

```
const users = [
    "Ania Nowak",
    "Piotr Kowalski",
    "Bartek Kosecki",
    "Natalia Nowak",
    "Weronika Piotrowska",
    "Agata Karolak",
    "Tomasz Nowak",
    "Mateusz Kowalski",
    "Marcin Kotecki",
    "Beata Lecka",
    "Katarzyna Małecka"
]*/

const users = [
  "Ania Nowak",
  "Piotr Kowalski",
  "Bartek Kosecki",
  "Natalia Nowak",
  "Weronika Piotrowska",
  "Agata Karolak",
  "Tomasz Nowak",
  "Mateusz Kowalski",
  "Marcin Kotecki",
  "Beata Lecka",
  "Katarzyna Małecka",
];

function checkFemale(name) {
  return name.at(-1) === "a";
}

console.log(checkFemale("Ania"));

function countWomanInTable(arr) {
  const women = arr.filter((fullName) => checkFemale(fullName.split(" ")[0]));

  return women.length;
}

console.log(countWomanInTable(users));
