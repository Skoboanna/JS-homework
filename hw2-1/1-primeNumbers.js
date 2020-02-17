//  1) Write a program that prints all prime numbers in given range. Take sub from 1-100.

function isPrime(number) {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return number != 1;
}

function getPrimeNumbersFromRange(rangeBeginning, rangeEnd) {
  let primeNumbersFromRange = [];
  for (let i = rangeBeginning; i <= rangeEnd; i++) {
    if (isPrime(i)) {
      primeNumbersFromRange.push(i);
    }
  }
  return primeNumbersFromRange;
}

let primeNumbers = getPrimeNumbersFromRange(15, 70);

primeNumbers.forEach(number => console.log(number));
