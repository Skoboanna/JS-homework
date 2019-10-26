// //  4) Create a function that returns given array in reverse order. // no build in functions  

let array = [4, 42, 2, 75, 8];

function getReversedArray(arr) {
    let newArr = [];
    arr.forEach(function (element, index) {
        newArr.push(arr[arr.length - 1 - index]);
    });
    return newArr;
}

let reversedArray = getReversedArray(array);
reversedArray.forEach(function (element) {
    console.log(element);
});