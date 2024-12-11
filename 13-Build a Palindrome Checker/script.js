const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");
const input = document.getElementById("text-input");

checkButton.addEventListener("click", function () {
  const text = input.value.trim();
  if (!text) {
    alert("Please input a value");
  } else {
    const isPalindrome = isPalindromeFn(text);
    result.textContent = isPalindrome
      ? `${input.value} is a palindrome`
      : `${input.value} is not a palindrome`;
  }
});

function isPalindromeFn(text) {
  const normalizedText = text.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversedText = normalizedText.split("").reverse().join("");
  return normalizedText === reversedText;
}
