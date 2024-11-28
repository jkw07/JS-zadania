/*## Zadanie 3
--------------------------
Napisz funkcję `fileInfo(file)`, która będzie przyjmować pełną nazwę pliku (wraz z rozszerzeniem).
Funkcja powinna zwracać obiekt, z właściwościami `name` oraz `extension`. 
Pod name podstaw nazwę przekazanego pliku, a pod extension jego rozszerzenie.
Jeżeli przekazany plik nie będzie w formacie `nazwa.rozszerzenie` (np. nie będzie miał nazwy plik.jpg), wtedy funkcja powinna zwróć false.*/

function fileInfo(file) {
  if (file.split(" ").length > 1) {
    return false;
  }
  const [name, extension, ...rest] = file.split(".");

  if (!name.trim() || !extension || rest.length) {
    return false;
  }
  return {
    name,
    extension,
  };
}

console.log(fileInfo("file"));

console.log(fileInfo("obraz.jpg"));
console.log(fileInfo("obraz"));
console.log(fileInfo(" obraz."));
console.log(fileInfo(".jpg"));
console.log(fileInfo("     .jpg"));
console.log(fileInfo("lala lala.jpg"));
console.log(fileInfo("b la.bla.jpg"));
