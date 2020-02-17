// 2) Write a guessing game where the user has to guess a secret number. After every guess the program tells the user whether their number was too large or too small.
// At the end the number of tries needed should be printed. It counts only as one try if they input the same number multiple times consecutively. Range 1-100.

function getRandomNumberFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function guessTheSecretNumber(
  secretNumber,
  guessNumber,
  guessMin,
  guessMax,
  recurCounter
) {
  let newGuessNumber;
  let newGuessMin;
  let newGuessMax;

  console.log("guess nr " + recurCounter + ": " + guessNumber);

  if (secretNumber > guessNumber) {
    newGuessNumber = Math.round((guessMax - guessNumber) / 2) + guessNumber;
    newGuessMin = guessNumber;
    newGuessMax = guessMax;
  } else if (secretNumber < guessNumber) {
    newGuessNumber = Math.floor((guessNumber - guessMin) / 2) + guessMin;
    newGuessMin = guessMin;
    newGuessMax = guessNumber;
  } else {
    return guessNumber;
  }

  return guessTheSecretNumber(
    secretNumber,
    newGuessNumber,
    newGuessMin,
    newGuessMax,
    recurCounter + 1
  );
}

const secretNumber = getRandomNumberFromRange(1, 100);
const guessNumber = getRandomNumberFromRange(1, 100);

console.log(
  secretNumber +
    " is the secret number, " +
    guessNumber +
    " is the generated one"
);
guessTheSecretNumber(secretNumber, guessNumber, 1, 100, 1);
