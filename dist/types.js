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
// Object as Anonymous
const sayNumber = (person) => {
    return `${person.name} number is ${person.num}`;
};
let james = sayNumber({ name: 'James', num: 1000 });
// Function's return value (void if "undefined")
const arrow = () => {
    console.log("void type");
};
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
let uId = 123;
uId = '123';
