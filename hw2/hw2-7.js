// 7) Create a function the return one random element from given array. // use random function 

function getRandomElement(array) {
    let randomIndex = Math.floor(Math.random() * (array.length));
    console.log("Random value = " + array[randomIndex] + " at index " + randomIndex);
    return array[randomIndex];
}

let arr = [1, 5, 42, 3, 7, 17, 65];

getRandomElement(arr);