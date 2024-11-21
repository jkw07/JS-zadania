/*Napisz funkcję `generateID()`, która po odpaleniu będzie zwracać losowy ciąg 20 znaków (liczb, cyfr i innych). Dowolna metoda kombinacji.*/


function generateId() {
    let generatedID = "";
    for (let i = 0; i < 20; i++) {
        generatedID += Math.floor(Math.random() * 10);
    }
    return generatedID;
}
console.log(`twoj ID to: ${generateId()}`);