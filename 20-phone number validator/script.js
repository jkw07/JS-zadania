const input = document.getElementById("user-input");
const checkButton = document.getElementById("check-btn");
const clearButton = document.getElementById("clear-btn");
const resultDiv = document.getElementById("results-div");
const regex =
  /^((1\s?([0-9]{3}\s?-?|\([0-9]{3}\)\s?))|([0-9]{3}-?)|(\([0-9]{3}\)))([0-9]{3}\s?-?[0-9]{4})$/;

checkButton.addEventListener("click", function () {
  if (!input.value.trim()) {
    alert("Please provide a phone number");
  }
  const isValid = ifNumberIsValid(input.value);
  resultDiv.textContent = isValid
    ? `Valid US number: ${input.value}`
    : `Invalid US number: ${input.value}`;
});

clearButton.addEventListener("click", function () {
  input.value = "";
  resultDiv.textContent = "";
});

function ifNumberIsValid(input) {
  return regex.test(input.trim());
}
