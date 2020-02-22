// 5) Write a code that takes a number/string and returns a list of its digits.
// So for 2342 it should return [2,3,4,2].’A243b’ -> [2,4,3].

function getDigitsFromString(text) {
  let filteredDigits = [];

  for (let i = 0; i < text.length; i++) {
    if (!isNaN(text[i])) {
      filteredDigits.push(text[i]);
    }
  }
  return filteredDigits;
}

let testString = "el4eee56oo";
let filteredString = getDigitsFromString(testString);
console.table(filteredString);
