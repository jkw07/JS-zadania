/*Stwórz prosty obiekt spaceShip, który będzie miał:
Właściwości:
name ustawioną na Enterprise
currentLocation ustawioną na Earth
flyDistance ustawione na 0
Metody:
flyTo(place, distance), która ustawi obiektowi właściwość currentLocation na odpowiednie miejsce podane w parametrze place oraz doliczy przebyty dystans do flyDistance.

Metodę showInfo(), która wypisze w konsoli tekst:

Informacje o statku:
----
Statek ....
doleciał do miejsca .....
Statek przeleciał już całkowity dystans ....
Metodę meetClingon(), która wykona 100 losowań 0-1. Jeżeli minimum połowa będzie pozytywna (większa niż połowa), wtedy powinna wypisać w konsoli:

Statek .... będący w okolicy .... zwycięsko wyszedł ze spotkania z Klingonami

jeżeli jednak mniej niż połowa będzie pozytywna, powinien pojawić się żółty tekst w konsoli (console.alert)

Statek .... będący w okolicy .... został pokonany przez Klingonów*/

const spaceShip = {
  name: "Enterprise",
  currentLocation: "Earth",
  flyDistance: 0,
  flyTo(place, distance) {
    this.currentLocation = place;
    this.flyDistance += distance;
  },
  showInfo() {
    console.log(`Informacje o statku:
    Statek ${this.name}
    doleciał do miejsca ${this.currentLocation}
    Statek przeleciał już całkowity dystans ${this.flyDistance}`);
  },
  meetClingon() {
    const numbers = new Array(100).fill().map(() => Math.random());
    console.log(
      numbers.filter((num) => num > 0.5).length >= numbers.length / 2
        ? `Statek ${this.name} będący w okolicy ${this.currentLocation} zwycięsko wyszedł ze spotkania z Klingonami`
        : `Statek ${this.name} będący w okolicy ${this.currentLocation} został pokonany przez Klingonów`
    );
  },
};

spaceShip.showInfo();
spaceShip.flyTo("Mars", 6);
spaceShip.showInfo();
spaceShip.meetClingon();
