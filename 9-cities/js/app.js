const cities = require("./cities");

/*Poniższe zadania najlepiej zrobić za pomocą metod tablicowych takich jak forEach(), filter(), map()` itp. 
Ich opis znajdziesz na stronie: http://kursjs.pl/kurs/super-podstawy/tablice-tematy-dodatkowe.php oraz na stronie MDN.
Do pliku html dołączone są 2 pliki: js/cities.js i js/app.js.
W pliku js/cities.js znajduje się tablica cities z miastami, na której będziemy działać.
Zadanie wykonuj w pliku js/app.js. Postaraj się używać odpowiednich funkcji dla tablic i stosować jak najkrótszy zapis. 
Przy rozwiązywaniu punktów staraj się unikać klasycznej pętli for / while.*/

//Zadanie 1 Wypisz ile miast jest w Polsce
console.log(`Liczba miast: ${cities.length}`);

//Zadanie 2 Wypisz ile jest ludzi w tych miastach
const population = cities.reduce(
  (accumulator, city) => accumulator + city.people,
  0
);
console.log(`Łączna populacja: ${population}`);

//Zadanie 3 Wypisz pierwsze miasto, w którym jest ponad 10000 ludzi
console.log("Pierwsze miasto, w którym jest ponad 10000 ludzi:");
console.log(cities.find((city) => city.people > 10000));

//Zadanie 4 Wypisz miasta, w których ludzi jest ponad średnią
console.log("Miasta, w których ludzi jest ponad średnią:");
console.log(
  cities.filter((city) => city.people > Math.floor(population / cities.length))
);

//Zadanie 5 Wypisz nazwy wszystkich miast, w których jest ponad 10000 ludzi
console.log("Nazwy wszystkich miast, w których jest ponad 10000 ludzi:");
const bigCitiesNames = cities.reduce((acc, city) => {
  if (city.people > 10000) {
    acc.push(city.name);
  }
  return acc;
}, []);

//Zadanie 6 Wypisz czy więcej jest miast z > 10000 ludzi czy mniejszych
console.log(
  bigCitiesNames.length > cities.length / 2
    ? "Więcej jest miast z > 10000 ludzi"
    : bigCitiesNames.length < cities.length / 2
    ? "Więcej jest mniejszych miast"
    : "Jest tyle samo dużych i małych miast"
);
