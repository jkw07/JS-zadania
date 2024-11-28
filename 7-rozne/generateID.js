/*Napisz funkcję `generateID()`, która po odpaleniu będzie zwracać losowy ciąg 20 znaków (liczb, cyfr i innych). 
Dowolna metoda kombinacji.*/

function generateRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function generateId() {
  const chars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()";

  return Array(20)
    .fill("")
    .map((_) => chars[generateRandom(0, chars.length - 1)])
    .join("");
}
console.log(`twoj ID to: ${generateId()}`);
