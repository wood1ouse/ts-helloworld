"use strict";
class Plane {
    // Constructor with assignment
    constructor(name, model) {
        this.name = name;
        this.model = model;
    }
    set setName(name) {
        this.name = name;
    }
    set setModel(model) {
        this.model = model;
    }
    setModelAsMethod(model) {
        this.model = model;
    }
    get getName() {
        return `${this.name} ${this.model} has ${Plane.wings} wings`;
    }
    getNameAsMethod() {
        return `${this.name} ${this.model} has ${Plane.wings} wings`;
    }
}
Plane.wings = 2;
let boeing = new Plane("Boeing", 737);
// As property
boeing.setModel = 737;
// As method
boeing.setModelAsMethod('737 MAX');
// Inheritance 
class AirFighter extends Plane {
    constructor(name, model, guns = 2) {
        // Superclass Constructor
        super(name, model);
        this.guns = guns;
    }
    get getName() {
        return `${this.name} ${this.model} has ${Plane.wings} wings and ${this.guns} guns`;
    }
}
let Kawasaki = new AirFighter('Kawasaki', 'Ki-100', 6);
// Abstract classes
class Engine {
    constructor(type) {
        this.type = type;
    }
}
class DiselEngine extends Engine {
    constructor(type) {
        super(type);
    }
    turnOn() {
        return `${this.type} go brr!`;
    }
}
let dieseleEngine = new DiselEngine('JT8D');
