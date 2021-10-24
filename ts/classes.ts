class Plane {
    static wings: number = 2

    // Constructor with assignment
    constructor(
        protected name: string,
        protected model: number | string
        ) 
    {}
    
    public set setName(name: string) {
        this.name = name;
    }

    public set setModel(model: number | string) {
        this.model = model;
    }

    public setModelAsMethod(model: number | string) {
        this.model = model;
    }

    public get getName(): string {
        return `${this.name} ${this.model} has ${Plane.wings} wings`
    }

    public getNameAsMethod(): string {
        return `${this.name} ${this.model} has ${Plane.wings} wings`
    }
    
}

let boeing = new Plane("Boeing", 737)

// As property
boeing.setModel = 737

// As method
boeing.setModelAsMethod('737 MAX')

// Inheritance 
class AirFighter extends Plane {
    constructor(
        name: string, 
        model: number | string, 
        private guns: number = 2
        ) {
            
        // Superclass Constructor
        super(name, model)
    }

    public get getName(): string {
        return `${this.name} ${this.model} has ${Plane.wings} wings and ${this.guns} guns`
    }
}

let Kawasaki = new AirFighter('Kawasaki', 'Ki-100', 6)


// Abstract classes
abstract class Engine {
    constructor(protected type: string) {}

    // Abstract Method without implementation
    abstract turnOn(): string
}

class DiselEngine extends Engine {
    constructor(type: string) {
        super(type)
    }
    turnOn(): string {
        return `${this.type} go brr!`
    }
}

let dieseleEngine = new DiselEngine('JT8D')