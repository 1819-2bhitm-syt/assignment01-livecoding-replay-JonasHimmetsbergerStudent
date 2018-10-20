/*let x = 10;
let y = x;

x = 20;

console.log("x = ", x);
console.log("y = ", y);

let x = { value: 10};
let y = x;

x.value = 20;

console.log("x = ", x);
console.log("y = ", y);

let number = 10;

function increase(number) {
    number++;
}

increase(number);
console.log(number);

let obj = {value: 10};

function increase(obj) {
    obj.value++;
}

increase(obj);
console.log(obj);
*/
const circle = {
    radius: 1,
    draw: function () {}
};

function createCircle(radius) {
    return {
        radius,
        draw: function () {}
    }
}

function Circle(radius) {
    this.radius = radius;
    this.draw = function () {}
}

const x = {};
x.constructor;

Circle.name;
Circle.length;
Circle.constructor;
Circle.call({}, 1);
Circle.apply({}, [1]);

circle.location = {};
circle['location'] = {};

delete circle.location;

