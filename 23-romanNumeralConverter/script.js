const input = document.getElementById("number");
const convertButton = document.getElementById("convert-btn");
const output = document.getElementById("output");
const clearButton = document.getElementById("clear-btn");

const romanNumerals = [
  { symbol: "M", value: 1000 },
  { symbol: "CM", value: 900 },
  { symbol: "D", value: 500 },
  { symbol: "CD", value: 400 },
  { symbol: "C", value: 100 },
  { symbol: "XC", value: 90 },
  { symbol: "L", value: 50 },
  { symbol: "XL", value: 40 },
  { symbol: "X", value: 10 },
  { symbol: "IX", value: 9 },
  { symbol: "V", value: 5 },
  { symbol: "IV", value: 4 },
  { symbol: "I", value: 1 },
];

const checkUserInput = () => {
  const inputNumber = Number(input.value);
  let message = "";
  if (!input.value) {
    message = "Please enter a valid number";
  } else if (inputNumber < 1) {
    message = "Please enter a number greater than or equal to 1";
  } else if (!Number.isInteger(inputNumber)) {
    message = "The number must be an integer";
  } else if (inputNumber >= 4000) {
    message = "Please enter a number less than or equal to 3999";
  } else {
    message = arabicToRoman(inputNumber);
    clearButton.classList.toggle("hidden");
  }
  output.textContent = message;
};

convertButton.addEventListener("click", checkUserInput);

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkUserInput();
  }
});

clearButton.addEventListener("click", () => {
  output.textContent = "";
  input.value = "";
  clearButton.classList.toggle("hidden");
});

function arabicToRoman(number) {
  let result = "";
  for (const { symbol, value } of romanNumerals) {
    while (number >= value) {
      result += symbol;
      number -= value;
    }
  }
  return result;
}
