/*Zad 1 
  stwórz fukcję calculate (a,b,operator), która przyjmuje 3 argumenty: a - pierwsza liczba, b- druga liczba, operator: +,-,*,/
  i na podstawie operatora wykonuje odpowiednią operację na liczbach a i b oraz zwraca wynik operacji*/

function calculate(a, b, operator) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Both inputs must be numbers");
  }
  switch (operator) {
    case "-":
      return a - b;
    case "+":
      return a + b;
    case "*":
      return a * b;
    case "/":
      if (b === 0) {
        throw new Error("Division by zero is not allowed");
      }
      return a / b;
    default:
      throw new Error("Invalid operator");
  }
}
const a = 2;
const b = 5;
const operator = "+";
console.log(calculate(a, b, operator));
