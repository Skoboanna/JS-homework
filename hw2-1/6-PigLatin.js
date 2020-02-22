// 6) Write function that translates a text to Pig Latin and back. English is translated to Pig Latin by taking the first letter of every word,
//  moving it to the end of the word and adding ‘ay’. “The quick brown fox” becomes “Hetay uickqay rownbay oxfay”.

function convertStringToPigLatin(text) {
  let pigText = text.toLowerCase().split(" ");

  for (let i = 0; i < pigText.length; i++) {
    pigText[i] += pigText[i][0] + "ay";
    pigText[i] = pigText[i].slice(1, pigText[i].length);
  }
  return pigText.join(" ");
}

let test = "The quick brown fox";
console.log(convertStringToPigLatin(test));
