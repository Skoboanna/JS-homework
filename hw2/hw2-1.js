// //1)	Create a function that returns the sum of all elements passed in array as parameter. Function (array)=>number

let array = [2, 100, 43, -4, 17, 8, 2, 75];

function getSum(arr) {
  let sum = 0;
  arr.forEach(function (element) {
    sum += element;
  });

  return sum;
}

console.log("Sum = " + getSum(array));