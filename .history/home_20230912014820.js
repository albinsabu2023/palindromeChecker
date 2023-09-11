function isPalindrome(str) {
  const cleanString = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reverseStr = cleanString.split("");
  console.log(reverseStr);
}

function palindrome() {
  const input = document.getElementById("inputText");
  const result = document.getElementById("result");
  if (isPalindrome(input.value)) {
  }
}

document.getElementById("checkButton").addEventListener("click", palindrome);
