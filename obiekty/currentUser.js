/*Stwórz obiekt currentUser. Obiekt niech ma właściwości: name, surname, email, www, userType, isActive.

oraz metodę show(), która wypisze wszystkie te właściwości w konsoli.

Dodatkowo stwórz metodę setActive(active), która przestawi właściwość isActive na przekazaną wartość, która może być true/false.*/

const currentUser = {
  name: "",
  surname: "",
  email: "",
  www: "",
  userType: "",
  isActive: false,
  show() {
    Object.entries(this)
      .filter(([key, value]) => typeof value !== "function")
      .forEach(([key, value]) => {
        console.log(`${key}: ${value}`);
      });
  },
  setActive(active) {
    this.isActive = active;
  },
};

currentUser.show();
currentUser.setActive(true);
console.log(currentUser.isActive);
