"use strict";
class Plane {
    // constructor with assignment
    constructor(name, model) {
        this.name = name;
        this.model = model;
    }
    set newName(name) {
        this.name = name;
    }
    set newModel(model) {
        this.model = model;
    }
}
let boeing = new Plane("Boeing", 737);
boeing.newName = 'Kawasaki';
boeing.newModel = 'Ki-100';
