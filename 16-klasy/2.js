/* Rozbuduj obiekty typu String, dodając do ich prototypu metodę String.sortText(char). 
Po użyciu powinna ona sortować słowa w danym tekście, 
a następnie zwracać podobny tekst, tylko posortowany:

"Marcin-Ania-Piotrek-Beata".sortText('-');

---> "ania-Beata-Marcin-Piotrek"
Wykorzystaj odpowiednie metody dzielące tekst na tablicę, sortujące tablicę i łączące ją w tekst. */

String.prototype.sortText = function (char = "") {
  if (typeof char !== "string") {
    throw new Error("Separator must be a string.");
  }
  return this.split(char)
    .sort((a, b) => a.localeCompare(b))
    .join(char);
};

const text1 = "Marcin-Ania-Piotrek-Beata";
const text1Sorted = text1.sortText("-");
console.log(text1Sorted);

const text2 = "Marcin.ania.Piotrek.Beata";
const text2Sorted = text2.sortText(".");
console.log(text2Sorted);
