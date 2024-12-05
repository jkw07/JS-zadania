/*Stwórz obiekt book, który będzie miał właściwości: title, author, pageCount, publisher.
oraz metodę: showDetails(), która zrobi pętlę po tym obiekcie wypisując wszystkie jego klucze oraz ich wartości. 
Metoda ta nie powinna wypisywać tylko funkcji showDetails().
Wypisywanie właściwości wykonaj za pomocą pętli for in, oraz pętli po kolekcjach Object.keys(), Object.values(), Object.entries().*/

const book = {
  title: "Blabla",
  author: "Aadjcbas",
  pageCount: "45",
  publisher: "xc xvv",
  showDetails() {
    for (const key in this) {
      if (typeof this[key] !== "function") {
        console.log(`${key}: ${this[key]}`);
      }
    }
    Object.entries(this).forEach(([key, value]) => {
      if (typeof value !== "function") {
        console.log(`${key}: ${value}`);
      }
    });
    Object.keys(this).forEach((key) => {
      if (typeof this[key] !== "function") {
        console.log(`${key}: ${this[key]}`);
      }
    });
    Object.values(this)
      .filter((value) => typeof value !== "function")
      .forEach((value) => console.log(value));
  },
};

book.showDetails();
