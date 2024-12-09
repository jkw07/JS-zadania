/*Poniższe zadania najlepiej zrobić za pomocą metod tablicowych takich jak forEach(), filter(), map()` itp. 
Zadanie wykonuj w pliku js/app.js. Postaraj się używać odpowiednich funkcji dla tablic i stosować jak najkrótszy zapis. 
Przy rozwiązywaniu punktów staraj się unikać klasycznej pętli for / while.*/

const users = require("./data");

//1.Wypisz imiona i nazwiska użytkowników oraz ich email np. Claire Lucas -> clairelucas@memora.com
users.forEach((user) => console.log(`${user.name} -> ${user.email}`));

//2.Wypisz tablicę z wszystkimi użytkownikami pełnoletnimi
console.log("Użytkownicy pełnoletni:");
console.log(users.filter((user) => user.age >= 18));

//3.Wypisz tablicę z wszystkimi kobietami
console.log("Kobiety:");
console.log(users.filter((user) => user.gender === "female"));

//4.Wypisz tablicę użytkowników którzy mają tag "dolor"
console.log("Użytkownicy z tagiem dolor:");
console.log(users.filter((user) => user.tags.includes("dolor")));

//5.Wypisz true/false w zależności od tego, czy wszyscy użytkownicy są pełnoletni
console.log(users.every((user) => user.age >= 18));

//6,Wypisz true/false w zależności od tego, czy chociaż jeden z użytkowników jest pełnoletni
console.log(users.some((user) => user.age >= 18));

//7.Wypisz nową tablicę zawierającą tylko imiona użytkowników, które będą pisane dużymi literami
const names = users.map((user) => user.name.split(" ")[0].toUpperCase());
console.log(names);

//8.Wypisz liczbę kobiet i liczbę mężczyzn Wypisz tekst, która grupa jest liczniejsza (np. "kobiety wygrywają")
const genders = users.reduce(
  (acc, user) => {
    if (user.gender === "male") {
      acc.male++;
    }
    if (user.gender === "female") {
      acc.female++;
    }
    return acc;
  },
  { female: 0, male: 0 }
);

console.log(genders);
console.log(
  genders.female > genders.male
    ? "Kobiety wygrywają"
    : genders.female < genders.male
    ? "Mężczyźni wygrywają"
    : "Nikt nie wygrywa"
);
