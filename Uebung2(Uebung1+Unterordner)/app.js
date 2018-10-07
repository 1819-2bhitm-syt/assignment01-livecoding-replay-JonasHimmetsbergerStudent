/*let hallo =  function(who) {
    console.log("Hallo " + who());
};

let getName = function() {
    return "Welt";
};

hallo(getName);

hallo(function () {
    return "node.js";
});

let hi = function (w) {
    w("Hallo Welt!");
};

hi(function (xyz) {
    console.log(xyz);
});*/

/*let logGreeting1 = function () {
    console.log("Hallo 1");
};

let logGreeting2 = function () {
    console.log("Hallo 2");
};

let logGreeting3 = function () {
    console.log("Hallo 3");
};

logGreeting1();

setTimeout(logGreeting2, 1000);

logGreeting3();*/

console.log("Hallo Welt!");

const data = require("./uebung1.js");

console.log(data.name("Hallo "));