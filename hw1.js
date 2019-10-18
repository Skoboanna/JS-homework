function printBreak() {
    console.log("-------------");
}

function printResult(number, result) {
    console.log("Nr" + number + ": ");
    result.forEach(function (element, index) {
        console.log(element + " ");
    })
    printBreak();
}

// 1) From years in array check for leap years [1974, 1900, 1985, 2000]

let years = [1974, 1900, 1985, 2000];
let leapYears = [];

for (let i = 0; i < years.length; i++) {
    if ((years[i] % 4 === 0 && years[i] % 100 != 0) || years[i] % 400 === 0) {
        leapYears.push(years[i]);
    }
}
printResult(1, leapYears);

// 2) - Calculate factorial of 7

let factorial = 1;

for (let i = 7; i > 0; i--) {
    factorial *= i;
}

console.log("Zad2: " + factorial);
printBreak();

// 3) Calculate the sum of the odd items [1,6,23,8,4,98,3,7,3,98,4,98]

var numbers = [1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98];
var oddSum = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 != 0) {
        oddSum += numbers[i]
    }
}
console.log("Zad3: " + oddSum);
printBreak();

// 4) Choose highest and lowest values from the given array. [1,6,23,8,4,98,3,7,3,98,4,98]. One loop run

var min = numbers[0];
var max = numbers[0];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < min) min = numbers[i];
    if (numbers[i] > max) max = numbers[i];
}

console.log("Zad4: min = " + min + ", max = " + max);
printBreak();

// 5) Choose longest string from the array. [‘Karol’, ‘Adam’,’Rogowski’,’Politechnika’,’Super’,’Weekend’]. 

var words = ['Karol', 'Adam', 'Rogowski', 'Politechnika', 'Super', 'Weekend'];
var longestIndex = 0;
var length = 0;

for (var i = 0; i < words.length; i++) {
    if (words[i].length > length) {
        length = words[i].length;
        longestIndex = i;
    }
}
console.log("Zad5: length = " + length + ", word = " + words[longestIndex]);
printBreak();

// 6) Choose all the indexes on the highest value from the given array. [1,6,23,8,4,98,3,7,3,98,4,98]. 

max = numbers[0];
var highIndex = [];

for (var i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) max = numbers[i];
}

for (i = 0; i < numbers.length; i++) {
    if (numbers[i] === max) {
        highIndex.push(i);
    }
}

printResult(6, highIndex);

// 7) Calculate average value from the given array for even numbers [1,6,23,8,4,98,3,7,3,98,4,98]

var evenAverage = 0;
var evenCounter = 0;

numbers.forEach(function (num) {
    if (num % 2 == 0) {
        evenAverage += num;
        evenCounter++;
    }
})

console.log("Zad 7: " + (evenAverage / evenCounter));
printBreak();

// 8) Calculate average value of items at even indexes. Zero is not considered to be even number. [1,6,23,8,4,98,3,7,3,98,4,98]

evenAverage = evenCounter = 0;

numbers.forEach(function (element, index) {
    if (index % 2 == 0 && index != 0) {
        evenAverage += element;
        evenCounter++;
    }
});

console.log("Zad 8: " + evenAverage / evenCounter + ", counter: " + evenCounter + ", aver: " + evenAverage);
printBreak();

// 9) With a given start value of 0. Iterate the array and add even items and subtract odd ones. [1,6,23,8,4,98,3,7,3,98,4,98]

var sum = 0;

numbers.forEach(function (element, index) {
    (index % 2 == 0) ? (sum += element) : (sum -= element);
})

console.log("Zad 9: " + sum);