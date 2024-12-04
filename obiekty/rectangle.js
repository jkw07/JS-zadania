/*Stwórz 2 obiekty: rectangle i circle. Obiekt rectangle powinien mieć właściwości height, width, natomiast circle właściwość radius. 
Oba obiekty powinny mieć metodę showArea(), która zwróci pole danej figury.

Wypisz oba obiekty w konsoli. Wypisz w konsoli teksty podstawiając odpowiednie dane w miejsce kropek:

Kwadrat ma szerokość ... i wysokość ...
Jego pole to ...

Koło ma promień ...
Jego pole to ...*/

const rectangle = {
  width: 5,
  height: 5,
  showArea() {
    return this.width * this.height;
  },
};

const circle = {
  radius: 3,
  showArea() {
    return Math.PI * Math.pow(this.radius, 2);
  },
};

console.log(`Kwadrat ma szerokosc ${rectangle.width} i wysokość ${
  rectangle.height
}.
    Jego pole to ${rectangle.showArea()}`);

console.log(`Koło ma promień ${circle.radius}. 
    Jego pole to ${circle.showArea().toFixed(2)}`);
