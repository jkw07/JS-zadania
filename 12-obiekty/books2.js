/* Stwórz obiekt book, który będzie miał:
Właściwości:
users która będzie tablicą użytkowników (na początku pusta)

Metody:
addUser(name, age, phone)
która doda to tablicy users nowy obiekt, który będzie miał klucze: name, age, phone z przekazanymi do tej funkcji danymi

showUsers()
która po odpaleniu wypisze w konsoli tekst: Wszyscy użytkownicy w książce a następnie w pętli wypisze wszystkich użytkowników

findByName(name)
która wypisze w konsoli pierwszego użytkownika, który ma szukane imię lub false jeżeli nie znajdzie.

findByPhone(phone)
która wypisze w konsoli pierwszego użytkownika, który ma szukany telefon lub false jeżeli nie znajdzie

getCount()
która wypisze ile jest użytkowników w tabeli */

const book = {
  users: [],
  addUser(name, age, phone) {
    this.users.push({ name, age, phone });
  },
  showUsers() {
    console.log(`Wszyscy użytkownicy w książce:`),
      this.users.forEach((user) => console.log(user));
  },
  findByName(name) {
    const findUser = this.users.find((user) => user.name === name);
    console.log(!findUser ? "false" : findUser);
  },
  findByPhone(phone) {
    const findPhone = this.users.find((user) => user.phone === phone);
    console.log(!findPhone ? "false" : findPhone);
  },
  getCount() {
    console.log(`Liczba użytkowników: ${this.users.length}`);
  },
};

book.addUser("Ania", 26, 666666666);
book.addUser("Kasia", 32, 222222222);
book.addUser("Ania", 59, 999999999);
book.showUsers();
book.findByName("Ania");
book.findByPhone(999999999);
book.getCount();
