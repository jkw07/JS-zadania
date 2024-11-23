/*## Zadanie 3
--------------------------
Napisz funkcję `fileInfo(file)`, która będzie przyjmować pełną nazwę pliku (wraz z rozszerzeniem).
Funkcja powinna zwracać obiekt, z właściwościami `name` oraz `extension`. 
Pod name podstaw nazwę przekazanego pliku, a pod extension jego rozszerzenie.
Jeżeli przekazany plik nie będzie w formacie `nazwa.rozszerzenie` (np. nie będzie miał nazwy plik.jpg), wtedy funkcja powinna zwróć false.*/

const file = prompt("Podaj pełną nazwe pliku w formacie nazwa.rozszerzenie");

function fileInfo(file) {
  if (!file || !file.includes(".") || file.includes(" ")) {
    return false;
  }
  const parts = file.split(".");
  if (!parts[0] || !parts[1] || parts.length > 2) {
    return false;
  }
    return {
      name: parts[0],
      extension: parts[1],
    }
}

console.log(fileInfo(file));

/*console.log(fileInfo("obraz.jpg"))
console.log(fileInfo("obraz"))
console.log(fileInfo("obraz."))
console.log(fileInfo(".jpg"))
console.log(fileInfo(" .jpg"))
console.log(fileInfo("lala lala.jpg"))
console.log(fileInfo("bla.bla.jpg"))*/

