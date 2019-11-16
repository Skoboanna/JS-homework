function add(x, y) {
    return x + y;
}

function sub(x, y) {
    return x - y;
}

function mult(x, y) {
    return x * y;
}

function div(x, y) {
    return x / y;
}

function getCalculatorObject() {
    let calculator = {
        currentOperation: sub,
        setOperation: function (op) {
            if (op == "*") { this.currentOperation = mult; }
            else if (op == "/") { this.currentOperation = div; }
            else if (op == "-") { this.currentOperation = sub; }
            else if (op == "+") { this.currentOperation = add; }
        },

        calculate: function (x, y) {
            return this.currentOperation(x, y);
        }
    };
    return calculator;
}

let calculator = getCalculatorObject();
calculator.setOperation("*");
console.log(calculator.calculate(16, 3));

