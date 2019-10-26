// //3)	Create a function that takes a number and return factorial of that number.

function getFactorial(number){
  let factorial = 1;
  for (let i=number; i>=1; i--){
    factorial *= i;
  }
  return factorial;
}

console.log("Factorial 4 = " + getFactorial(4));