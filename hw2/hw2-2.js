// //2)	Create a function that returns sum of first and last elements of given array.

let array = [2, 100, 43, -4, 17, 8, 2, 75];

function getFirstLastElement(array) {
  let sum = 0;
  let arrayLength = array.length;

  if (arrayLength >= 2) sum = array[0] + array[arrayLength - 1];
  else {
    console.log("Whoops! Array is too short");
    sum = array[0];
  }

  return sum;
}

console.log("FirstElement + LastElement = " + getFirstLastElement(array));

