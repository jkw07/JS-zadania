/*Napisz funkcje, która przyjmuje 2 parametry:
1) imię - np: Ala
2) miesiąc - np: styczeń

Funkcja ma zwracać:
* jeżeli miesiąc to grudzien, styczen, luty: `"Ala jezdzi na sankach"`
* jeżeli miesiąc to marzec, kwiecien, maj: `"Ala chodzi po kaluzach"`
* jeżeli miesiąc to czerwiec, lipiec, sierpien: `"Ala sie opala"`
* jeżeli miesiąc to wrzesień, pazdzietnik, listopad: `"Ala zbiera liscie"`

Wywołaj funkcje przekazując do niej zmienne: twoje imię i dowolny miesiąc.

Dopisz w funkcji zabezpieczenie, które pozwoli wpisać miesiąc małymi lub dużymi literami. Jeżeli miesiąc jest "innym słowem", 
funkcja niech zwraca `"Ala uczy się JS"`*/

function whatSheDoes(personName, month = "") {
  const mth = (month ?? "").toLowerCase(); //nowa nazwa stalej i ?? zamiast ||
  const activities = {
    grudzien: "jezdzi na sankach",
    styczen: "jezdzi na sankach",
    luty: "jezdzi na sankach",
    marzec: "chodzi po kaluzach",
    kwiecien: "chodzi po kaluzach",
    maj: "chodzi po kaluzach",
    czerwiec: "sie opala",
    lipiec: "sie opala",
    sierpien: "sie opala",
    wrzesien: "zbiera liscie",
    pazdziernik: "zbiera liscie",
    listopad: "zbiera liscie",
  };
  console.log(`${personName} ${activities[mth] ?? "uczy sie JS"}`); //
}
let personName = "Ala";
let month = "marzec";
whatSheDoes(personName, month);
