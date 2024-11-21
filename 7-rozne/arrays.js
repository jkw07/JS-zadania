/*Stwórz funkcję `generateRandom(min, max)`, która będzie przyjmować dwie wartości - min i max. 
Funkcja powinna zwrócić losową liczbę z podanego przedziału.
Do generowania losowej liczby możesz użyć wzoru: `Math.floor(Math.random()*(max-min+1)+min)`.

Wykorzystaj ją do utworzenia 10 liczb z przedziału `1 - 20`. Jeżeli połowa z nich będzie większa od `10`, 
wypisz tekst `udało się`, w przeciwnym razie wypisz w konsoli tekst `niestety nie`.*/

function generateRandom(min,max) {
    const randomNumbers=[];
    let number = 0;
    while (randomNumbers.length < 10) {
        number = Math.floor(Math.random()*(max-min+1)+min);
        randomNumbers.push(number);
    }
    console.log(randomNumbers);
    const greaterThanTen = randomNumbers.filter(num => num > 10);
    console.log(`${greaterThanTen.length >= randomNumbers.length/2 ? "Udalo sie" : "niestety nie"}`);
}


generateRandom(1,20);