"use strict";
// Primitives
let num = 100;
let str = 'hey';
let n = null;
let ud = undefined;
let some;
// Array
let list = [0, 1, 2, 3, 5];
let listGeneric = [0, 1, 2, 3, 6];
// Object
const sayNumber = (person) => {
    return `${person.name} number is ${person.num}`;
};
let james = sayNumber({ name: 'James', num: 1000 });
let obj = {
    name: 'John',
    age: 19,
    nickname: 'woodlouse'
};
// Function's return value (void if "undefined")
const arrow = () => {
    console.log("void type");
};
let myFunc;
function oldFunc(name) {
    alert(`Hello, ${name}`);
}
myFunc = oldFunc;
// Tuple based
let x = [str, num];
// Any type
let y = [num, num];
let arr = [str, str];
// Function return Error
const error = (msg) => {
    throw new Error(msg);
};
// Cannot get result due to Infinite Loop
const inf = () => {
    while (true) {
    }
};
