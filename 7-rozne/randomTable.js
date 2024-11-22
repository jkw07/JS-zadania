/*## Zadanie 8
--------------------------
Napisz kolejną funkcję `generateRandomTable(min, max, count)`, która korzystając w powyższej funkcji zwróci nową tablicę o długości `count`, która będzie zawierać losowe liczby. Możesz tutaj posłużyć się funkcją z poprzedniego zadania.

Wygeneruj nową tablicę o długości 10 z liczbami z zakresu 10-100000. Następnie robiąc pętlę po tej tablicy wypisz te liczby tak, by były pisane w jednej kolumnie - przykładowo:

```
_________10
________102
__________1
_______1002
______92020
```

Do wyrównania liczb możesz wykorzystać funkcję `padStart()`. Zakładamy, że pojedyncza linia powinna mieć długość maksymalnie 10 znaków.*/

function generateRandomTable(min,max,count) {
    const randomTable=[];
    while (randomTable.length < count) {
        let number = Math.floor(Math.random()*(max-min+1)+min);
        randomTable.push(number);
    }
    console.log(randomTable);
    for (const number of randomTable) {
      let text = number.toString();
      console.log(text.padStart(10,"_"));
    }
}


generateRandomTable(10,100000,10);