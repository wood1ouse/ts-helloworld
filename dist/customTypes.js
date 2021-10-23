"use strict";
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
