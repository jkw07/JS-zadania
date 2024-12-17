/* Stwórz konstruktor/klasę User. Każdy obiekt budowany na jego bazie powinien mieć właściwości:

nick - string
name - string
surname - string
email - string
role - string - typ użytkownika - "editor", "reader", "admin"
loginDates - tablica - początkowo pusta - z datami kolejnych logowań
active - boolean - domyślnie ustawione na true - czy dany użytkownik jest aktywny
Właściwości nick, name, surname, email, role powinny być podawane podczas tworzenia pojedynczego obiektu.

Dodaj także metody:

logIn(), która wstawi do tablicy loginDates nową datę logowania. Aktualną datę możesz pobrać za pomocą kodu new Intl.DateTimeFormat('pl-PL', { dateStyle: 'full', timeStyle: 'long' }).format(new Date())
showLoginDates(), która w pętli pokaże wszystkie daty logowań
showDetails(), która robiąc pętlę po kluczach wypisze w konsoli wszystkie informacje o danym użytkowniku
toggleActive(active), która przełączy właściwość active na odwrotną wartość.
Stwórz tablicę users i dodaj do niej 3 obiekty utworzone na bazie powyższej klasy. Poeksperymentuj z ich metodami. */

class User {
  constructor({ nick, name, surname, email, role }) {
    this.nick = nick;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.role = role;
    this.loginDates = [];
    this.active = true;
  }
  logIn() {
    const currentDate = new Intl.DateTimeFormat("pl-PL", {
      dateStyle: "full",
      timeStyle: "long",
    }).format(new Date());
    this.loginDates.push(Date.now());
  }
  showLoginDates() {
    console.log(`Daty logowań uzytkownika ${this.nick}:`);
    this.loginDates.forEach((date) => console.log(date));
  }
  showDetails() {
    console.log(`Szczegóły uzytkownika:`);
    for (const [key, value] of Object.entries(this)) {
      console.log(`${key}: ${value}`);
    }
  }
  toggleActive(active) {
    this.active = !this.active;
    console.log(
      `Użytkownik ${this.nick} jest teraz ${
        this.active ? "aktywny" : "nieaktywny"
      }.`
    );
  }
}

const users = [];
const user1 = new User({
  nick: "blackCat",
  name: "Aaaa",
  surname: "Ffff",
  email: "blackCat@gmail.com",
  role: "editor",
});
const user2 = new User({
  nick: "whiteCat",
  name: "Bbbb",
  surname: "Eeeee",
  email: "whiteCat@gmail.com",
  role: "reader",
});
const user3 = new User({
  nick: "redCat",
  name: "Ccccc",
  surname: "Ddddd",
  email: "redCat@gmail.com",
  role: "admin",
});
users.push(user1);
users.push(user2);
users.push(user3);

console.log(users);
user1.logIn();
user2.logIn();
user1.logIn();
await sleep(3000);
user1.logIn();
user1.logIn();
user1.showLoginDates();
user1.showDetails();
user1.toggleActive();
user1.toggleActive();

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
