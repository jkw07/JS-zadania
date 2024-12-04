/*Mamy przykładową tablicę imion:

const names = [
    "Marcin",
    "Ania",
    "Monika",
    "Piotr",
    "Beata",
    "ania",
    "marcin",
    "piotr",
    "PIOTR",
    "ANIA",
    "MONIKA"
]
Stwórz funkcję unifyNames(names), do której przekażesz powyższą tablicę. 
Funkcja powinna zwrócić nową tablicę z imionami pisanymi małymi literami. 
Dla utrudnienia możesz zwrócić nową tablicę z imionami pisanymi z dużej litery.

Wykorzystaj powyższą funkcję aby uzyskać nową tablicę. Stwórz kolejną funkcję countDifferentNames(names), 
do której przekażesz nowo uzyskaną tablicę. Funkcja powinna zwrócić liczby występowania danego imienia. 
Idealnym rozwiązaniem będzie,gdy funkcja zwróci te informacje pod postacią obiektu.*/

const names = [
  "Marcin",
  "Ania",
  "Monika",
  "Piotr",
  "Beata",
  "ania",
  "marcin",
  "piotr",
  "PIOTR",
  "ANIA",
  "MONIKA",
];

function unifyNames(names) {
  return names.map(
    (name) => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
  );
}

const newNames = unifyNames(names);
console.log(newNames);

function countDifferentNames(names) {
  return names.reduce((acc, name) => {
    acc[name] = (acc[name] || 0) + 1;
    return acc;
  }, {});
}

const objNames = countDifferentNames(newNames);
console.log(objNames);
