// 3) Create an array (by hand) of objects and call sum() function in context of each one of them.
// Sum function is to come from this object  BaseObject = { X,y, sum: function (){ return this.x+this.y}}

let sumObjects = [
    { x: 2, y: 1 },
    { x: -5, y: 3 },
    { x: 2, y: 7 },
    { x: -12, y: 1 },
    { x: 4, y: 7 },
    { x: 9, y: 8 }
];

let basicObject = {
    x: 0,
    y: 0,
    sum: function () {
        return this.x + this.y;
    }
};

let sumOfObject = 0;

for (let i = 0; i < sumObjects.length; i++) {
    sumOfObject = basicObject.sum.bind(sumObjects[i]);
    console.log(sumOfObject());
}
