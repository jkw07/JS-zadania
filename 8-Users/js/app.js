/*Poniższe zadania najlepiej zrobić za pomocą metod tablicowych takich jak forEach(), filter(), map()` itp. 
Zadanie wykonuj w pliku js/app.js. Postaraj się używać odpowiednich funkcji dla tablic i stosować jak najkrótszy zapis. 
Przy rozwiązywaniu punktów staraj się unikać klasycznej pętli for / while.*/

const users = require("./data");

//1.Wypisz imiona i nazwiska użytkowników oraz ich email np. Claire Lucas -> clairelucas@memora.com
users.forEach((user) => console.log(`${user.name} -> ${user.email}`));

//2.Wypisz tablicę z wszystkimi użytkownikami pełnoletnimi
const adults = users.filter((user) => user.age >= 18);
adults.forEach((user) => console.log(`${user.name}, ${user.age}`));

//3.Wypisz tablicę z wszystkimi kobietami
const women = users.filter((user) => user.gender === "female");
women.forEach((user) => console.log(user.name));

//4.Wypisz tablicę użytkowników którzy mają tag "dolor"
const dolor = users.filter((user) => user.tags.includes("dolor"));
dolor.forEach((user) => console.log(user.name));

//5.Wypisz true/false w zależności od tego, czy wszyscy użytkownicy są pełnoletni
console.log(users.every((user) => user.age >= 18));

//6,Wypisz true/false w zależności od tego, czy chociaż jeden z użytkowników jest pełnoletni
console.log(users.some((user) => user.age >= 18));

//7.Wypisz nową tablicę zawierającą tylko imiona użytkowników, które będą pisane dużymi literami
const names = users.map((user) => user.name.split(" ")[0].toUpperCase());
console.log(names);

//8.Wypisz liczbę kobiet i liczbę mężczyzn Wypisz tekst, która grupa jest liczniejsza (np. "kobiety wygrywają")
const men = users.filter((user) => user.gender === "male");
console.log(`Liczba kobiet: ${women.length}`);
console.log(`Liczba mężczyzn: ${men.length}`);
console.log(
  women.length > men.length ? "Kobiety wygrywają" : "Mężczyźni wygrywają"
);
