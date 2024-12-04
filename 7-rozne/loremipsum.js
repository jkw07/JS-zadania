//Mamy tablicę:

const tab = [
  "xloremipsumdolor",
  "kloremipsum",
  "aloremipsumdol",
  "blor",
  "cloremipsu",
  "gloremip",
];
/*Posortuj ją po długościach kolejnych elementów. 
Na początku powinien być najkrótszy tekst, na końcu najdłuższy. 
Następnie wypisz w konsoli, ile liter mają wszystkie elementy razem.*/

const sortedTab = tab.toSorted((a, b) => a.length - b.length);
console.log(sortedTab);
console.log(`Liter łącznie: ${[...tab].join("").length}`);
