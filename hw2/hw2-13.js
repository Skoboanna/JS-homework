// 13) Create a function that take two numbers and return the object with 4 fields. Result on 4 basic arithmetic operations. 

function calculator(x, y) {
    return {
        add: x + y,
        subtract: x - y,
        multiply: x * y,
        divide: x - y
    }
}

console.log(calculator(10, 2).multiply);