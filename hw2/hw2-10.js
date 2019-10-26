// 10) Create a function that on given array will perform operation of adding or subtracting elements. Operation is to be chosen at random. And return a result.[a,b,c,d] =>(((a+-b)+-c)+-d)

function getChangedArray(array) {
    let randomOperation = Math.round(Math.random());

    return array.reduce(function (previous, current) {
        return previous + (randomOperation ? current : -current);
    })
}

console.log(getChangedArray([1, 3, 4, 2, 5, 2]));
