"use strict";
let uId = 123;
uId = '123';
let currentUser = {
    firstName: 'Yura',
    age: 27,
    getPass() {
        return () => {
            return `${this.firstName}${this.age}`;
        };
    }
};
let passwordCreator = currentUser.getPass();
passwordCreator(); // "Yura27"
