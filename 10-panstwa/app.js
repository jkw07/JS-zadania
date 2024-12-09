const countries = require("./data");

//W pliku data/data.js znajduje się tablica z państwami. Stosując poznane metody tablicowe zrealizuj poniższe zadania:

//Zadanie 1 Wypisz wszystkie nazwy państw, a następnie ile jest razem ludności we wszystkich państwach
countries.forEach((country) => console.log(country.name));
const totalPopulation = countries.reduce(
  (accumulator, country) => accumulator + country.population,
  0
);
console.log(`Razem ludnosci: ${totalPopulation}`);

//Zadanie 2 Wypisz średnią ludność w państwach
console.log(
  `Srednia ludnosc: ${Math.floor(totalPopulation / countries.length)}`
);

//Zadanie 3 Wypisz ile jest państw, które mają dodatni wzrost
console.log(
  `Liczba państw z dodatnim wzrostem: ${
    countries.filter((country) => country.grow > 0).length
  }`
);

//Zadanie 4 Wypisz ile jest państw, które mają ujemny wzrost
console.log(
  `Liczba państw z ujemnym wzrostem: ${
    countries.filter((country) => country.grow < 0).length
  }`
);

//Zadanie 5 Napisz ile wszystkie państwa zajmują procent powierzchni Ziemi (world_area)
console.log(
  `Procent powierzchni Ziemi, jaki zajmują wszystkie państwa: ${Math.round(
    countries.reduce(
      (accumulator, country) => accumulator + country.world_area_in_percent,
      0
    )
  )}`
);

//Zadanie 6 Napisz ile wynosi średnia dzietności na świecie (fertility_rate) (uwaga - niektóre kraje nie mają danych - wtedy jest null)
const fertilityData = countries.reduce(
  (acc, country) => {
    if (country.fertility_rate) {
      acc.countryCount++;
      acc.totalFertilityRate += country.fertility_rate;
    }
    return acc;
  },
  { countryCount: 0, totalFertilityRate: 0 }
);
console.log(fertilityData);
console.log(
  `Średnia dzietności na świecie wynosi: ${
    fertilityData.totalFertilityRate / fertilityData.countryCount
  }`
);

//Zadanie 7 Napisz ile wynosi średnia wieku na świecie
const mediumAgeData = countries.reduce(
  (acc, country) => {
    if (country.medium_age) {
      acc.countryCount++;
      acc.totalMediumAge += country.medium_age;
    }
    return acc;
  },
  { countryCount: 0, totalMediumAge: 0 }
);
const worldMediumAge =
  mediumAgeData.totalMediumAge / mediumAgeData.countryCount;

console.log(mediumAgeData);
console.log(`Średnia wieku na świecie wynosi: ${worldMediumAge}`);

//Zadanie 8 Wypisz wszystkie dane na temat Polski
const poland = countries.find((country) => country.name === "Poland");
console.log(poland);

//Zadanie 9 Sprawdź czy średnia wieku w Polsce jest większa od średniej na Świecie.
console.log(
  poland.medium_age > worldMediumAge
    ? "Średnia wieku w Polsce jest większa od sredniej na świecie"
    : poland.medium_age < worldMediumAge
    ? "Średnia wieku w POlsce jest niższa od średniej na świecie"
    : "Średnia wieku w Polsce jest taka sama jak średnia wieku na świecie"
);
