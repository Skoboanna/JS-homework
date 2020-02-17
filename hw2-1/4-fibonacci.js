// 4) Write a class that prints the list of the first n Fibonacci numbers. The first two Fibonacci numbers are 1 and 1.
// The n+1-st Fibonacci number can be computed by adding the n-th and the n-1-th Fibonacci number.
// The first few are therefore 1, 1, 1+1=2, 1+2=3, 2+3=5, 3+5=8.

class Fibonacci {
  constructor(counter) {
    this.counter = counter;
    this.fibonacciNumbers = [1, 1];
  }

  setCounter(counter) {
    this.counter = counter;
  }

  computeFibonacci() {
    for (let i = 2; i < this.counter; i++) {
      this.fibonacciNumbers.push(
        this.fibonacciNumbers[i - 2] + this.fibonacciNumbers[i - 1]
      );
    }
  }

  printFibonacci() {
    let fibonacciString = "";
    this.fibonacciNumbers.forEach(number => {
      fibonacciString += number + " ";
    });
    console.log(fibonacciString);
  }
}

let fibonacci = new Fibonacci(6);
fibonacci.computeFibonacci();
fibonacci.printFibonacci();
