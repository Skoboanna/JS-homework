// // 5) Create a function that based on given array returns new array in pattern [a,b,c,d,e,f] -> [a+b, c+d, e+f]    [1,3,4,1,0,3] => [4,5,3] function(array)=>array

let array = [1, 3, 4, 1, 0, 3, 7];

function getShortenedArray(arr) {
    let shortenedArray = []

    for (let i = 0; i < arr.length; i += 2) {
        if (array.length % 2 != 0) arr.push(0);
        shortenedArray.push(arr[i] + arr[i + 1]);
    }

    return shortenedArray;
}

console.log(getShortenedArray(array));