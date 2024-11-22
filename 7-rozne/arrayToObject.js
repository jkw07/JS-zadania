/*## Zadanie 16
--------------------------
Mamy przykładową tablicę:
```
const tab = [1,3,5,7,3,5,5,1,7,8,4,3,4,2,2,1];
```
Stwórz funkcję `arraySummary(arr)`, która zwróci obiekt zawierający dane na temat przekazanej tablicy.
Obiekt ten powinien mieć klucz `sum`, w którym zapiszesz sumę wszystkich liczb z tablicy.
Dodatkowo powinien mieć klucze odpowiadające liczbom z tablicy. Pod każdym takim kluczem powinieneś zachować liczbę wystąpień danej liczby.

```
Input:
const tab = [1,1,1,2,2,1,3,3,5,7,5]
Wynik:
const ob = {
    1 : 4,
    2 : 2
    3 : 2,
    5 : 2,
    7 : 1,
    sum : 31
}
```*/

const tab = [1,1,1,2,2,1,3,3,5,7,5];

function arraySummary(arr) {
  const objSummary = arr.reduce((acc,num)=>{
    acc[num] = (acc[num] || 0) + 1;
    return acc;
  }, {});
  objSummary.sum = arr.reduce((total,num)=>total+num,0);
  console.log(objSummary);
}


arraySummary(tab);