// 6) For time of this example remove last element from the given array. Create a function that based on given array return new array in pattern [a,b,c,d,e] -> [a+b, c+d, e+e]

function createNewArray(arr) {
    let newArray = [];

    for (let i = 0; i <= arr.length - 2; i += 2) {
        newArray.push(arr[i] + arr[i + 1]);
    }
    newArray.push(Math.pow(arr[arr.length - 1], 2));

    return newArray;
}

console.log(createNewArray([2, 5, 4, 3, 6]));