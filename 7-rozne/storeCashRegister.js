/*Symulator kasy sklepowej
Stwórz funkcję która symuluje prostą kasę sklepową. Twoim zadaniem będzie przećwiczenie operatorów matematycznych i logicznych
Napisz funckję calculateTotal(items,doscount), która:
- przyjmuje dwa argumenty: items - tablica cen produktów; discount - liczba określająca procentowy rabat, np. 10 oznacza 10% rabatu
- oblicza łaczną sumę produktów
- uwzględnia rabat jesli jest wiekszy od zera
- zwraca ostateczną kwotę po rabacie
- dodaj obsluge bledów: jesli items nie jest tablicą liczb lub discount nie jest liczbą, funkcja powinna wyrzucic błąd
jesli rabat jest mniejszy niz 0 lub większy niz 100, rowniez rzuc błąd*/

function calculateTotal(items, discount) {
  if (!Array.isArray(items)) {
    throw new Error("Items must be an array of numbers");
  }
  if (typeof discount !== "number") {
    throw new Error("Both inputs must be numbers");
  }
  if (discount < 0 || discount > 100) {
    throw new Error("Change discount number");
  }
  if (items.length === 0) {
    return 0;
  }
  let sum = 0;
  for (const item of items) {
    sum += item;
  }
  const afterDiscount = (sum - (sum * discount) / 100).toFixed(2);
  if (afterDiscount > 100) {
    const bigDiscount = (afterDiscount - (afterDiscount * 10) / 100).toFixed(2);
    return bigDiscount;
  } else return afterDiscount;
}

console.log(`Total payment is ${calculateTotal([100, 20, 20], 50)}`);
