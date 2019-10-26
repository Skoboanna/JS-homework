// 8) Create a function that takes two parameters: array and number off attempts. 
// Based on number of attempts choose a random number from table that many times and return lowest one.

let arr = [8, 4, 3, 2, 54, 6, 0, 12, 50, 43, 28, 36, 9];

function getLowestRandom(array, number) {
    let lowest;
    let temporaryLowest;

    lowest = array[Math.floor(Math.random() * (array.length - 1))];
    console.log("Attempt nr 1: " + lowest);
    temporaryLowest = lowest;

    if (number > 1) {
        for (let i = number - 1; i > 0; i--) {
            temporaryLowest = array[Math.floor(Math.random() * (array.length - 1))];
            console.log("Attempt nr " + (number - i + 1) + ": " + temporaryLowest);
            if (lowest >= temporaryLowest) lowest = temporaryLowest;

        }
    }

    console.log("lowest = " + lowest);
    return lowest;
}

getLowestRandom(arr, 5);