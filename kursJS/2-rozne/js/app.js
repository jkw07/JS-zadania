
//ZAD 1

/*const txt = prompt("Podaj jakies slowo");
if (txt == false) { 
    console.log("Nie mam co liczyc");
} else { 
    console.log(`Twoje slowo ${txt} ma ${txt.length} liter`);
}
    */

//LUB

/*const txt = prompt("podaj jakies slowo");
function countWords(txt) {
    txt == false ? console.log("nie mam czego liczyc") : console.log(`Twoje slowo ${txt} ma ${txt.length} liter`);
}
countWords(txt);*/

//ZAD 2

/*const userInput = prompt("Podaj swoje imie");
function fixName(name) {
    if (!name) {
        console.log("Nic nie wpisano");
    } else {
        const fixedName = name[0].toUpperCase() + name.slice(1).toLowerCase();
        console.log(`Imię ${fixedName} zaczyna się od litery ${fixedName[0]}`);
        return fixedName;
    }
}
fixName(userInput);*/

//ZAD 4

/*function generateId() {
    let generatedID = "";
    for (let i = 0; i < 20; i++) {
        generatedID += Math.floor(Math.random() * 10);
    }
    return generatedID;
}
console.log(`twoj ID to: ${generateId()}`);*/

//ZAD 5

/*const userInput = prompt("Podaj liczbe");

function printNumbers(number) {
    if (!number) {
        console.log("Nic nie wpisano");
    } else {
        numbers = number;
        for (let i = 0; i < 20; i++) {
            numbers += Math.floor(Math.random() * 10);
        }
        return numbers;
    }
}
printNumbers(userInput);
console.log(numbers); */

//ZAD 6

function whatSheDoes(personName, month) {
    month = month.toLowerCase();
    const activities = {
        'grudzien': 'jezdzi na sankach',
        'styczen': 'jezdzi na sankach',
        'luty': 'jezdzi na sankach',
        'marzec': 'chodzi po kaluzach',
        'kwiecien': 'chodzi po kaluzach',
        'maj': 'chodzi po kaluzach',
        'czerwiec': 'sie opala',
        'lipiec': 'sie opala',
        'sierpien': 'sie opala',
        'wrzesien': 'zbiera liscie',
        'pazdziernik': 'zbiera liscie',
        'listopad': 'zbiera liscie',
    };
    console.log(`${personName} ${activities[month] || "uczy sie JS"}`);
}
let personName = "Ala";
let month = "marzec";
whatSheDoes(personName, month);