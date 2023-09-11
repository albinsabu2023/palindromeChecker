function isPalindrome(str) {
  const cleanString = str.toLowerCase().replace(/[^a-z0-9]/g);
}

function palindrome() {
  const input = document.getElementById("inputText");
  const result = document.getElementById("result");
  if (isPalindrome(input)) {
  }
}

document.getElementById("checkButton").addEventListener("click", palindrome);
