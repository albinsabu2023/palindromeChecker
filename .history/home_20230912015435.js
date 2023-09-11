function isPalindrome(str) {
  const cleanString = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reverseStr = cleanString.split("").reverse().join("");
  console.log(reverseStr);
  return cleanString === reverseStr;
}

function palindrome() {
  const input = document.getElementById("inputText");
  const result = document.getElementById("result");
  if (isPalindrome(input.value)) {
    result.textContent = `${input.value} is palindorme`;
  } else {
    result.textContent = `${input.value} is not palindorme`;
  }
}

document.getElementById("checkButton").addEventListener("click", palindrome);
