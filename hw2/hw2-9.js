// 9) Create a function that takes given array. Then takes a random element, removes it from the array 
// and pushes it to result arrays. This takes place as long as there are elements in source array. 

function getRandomlyReversedArray(array) {
    let randomIndex;
    let randomValue;
    let newArray = [];

    for (let i = array.length; i > 0; i--) {
        randomIndex = Math.floor(Math.random() * (array.length - 1));
        randomValue = array.splice(randomIndex, 1);
        newArray.push(randomValue);
    }

    return newArray;
}

let arr = [8, 4, 3, 2, 54, 17, 6, 50, 12];
let reversedArray = getRandomlyReversedArray(arr);

reversedArray.forEach(function (element) {
    console.log(element);
});


