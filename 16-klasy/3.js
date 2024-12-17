/* Rozbuduj obiekty typu String dodając im metodę reverse(), 
która po odpaleniu dla tekstu zwróci jego odbicie:

"Ala ma kota".mirror() === "atok am alA" */

String.prototype.mirror = function () {
  return this.split("").reverse().join("");
};

const text1 = "Ala ma kota";
const text2 = text1.mirror();
console.log(text2);
console.log("Blablabla bla".mirror());
