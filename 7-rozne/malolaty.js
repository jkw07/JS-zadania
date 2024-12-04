//Mamy tablicę:

const tabUsers = [
  { name: "Marcin", age: 14 },
  { name: "Piotr", age: 18 },
  { name: "Weronika", age: 20 },
  { name: "Ania", age: 19 },
  { name: "Agnieszka", age: 13 },
  { name: "Magda", age: 30 },
];
/*Sprawdź, czy w tablicy znajdują się pełnoletni użytkownicy. 
Jeżeli ich nie ma, wypisz w konsoli tekst same małolaty. 
Jeżeli jednak tacy są, stwórz nową tablicę zawierającą tylko pełnoletnie osoby, 
posortuj ją, a następnie wypisz w konsoli.*/

if (!tabUsers.find((el) => el.age >= 18)) {
  console.log(`same małolaty`);
} else {
  const adults = tabUsers
    .filter((user) => user.age >= 18)
    .sort((a, b) => a.age - b.age);
  console.log(adults);
}
