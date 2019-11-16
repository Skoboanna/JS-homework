// 4) Given an array of objects, for each object call operation() function in context of next object.
//  If object is last, got back to start of the array for operation function. In loop;

let callArray = [
    {
        x: 1,
        y: 'object one value',
        operation: function () {
            return "Object one prefix " + this.x + " " + this.y;
        }
    },
    {
        x: 2,
        y: 'object two value',
        operation: function () {
            return "Object two prefix " + this.x + " " + this.y;
        }
    },
    {
        x: 3,
        y: 'object three value',
        operation: function () {
            return "Object three prefix " + this.x + " " + this.y;
        }
    },

];

let nextIndex;
let currentOperation;

for (let i = 1; i < callArray.length + 1; i++) {
    nextIndex = i % 3;
    currentOperation = callArray[i - 1].operation.bind(callArray[nextIndex]);
    console.log(currentOperation());
}