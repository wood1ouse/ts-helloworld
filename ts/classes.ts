class Plane {
    // constructor with assignment
    constructor(
        private name: string,
        private model: number | string
        ) 
    {}
    
    public set newName(name : string) {
        this.name = name;
    }

    public set newModel(model : number | string) {
        this.model = model;
    }
    
}

let boeing = new Plane("Boeing", 737)

boeing.newName = 'Kawasaki'
boeing.newModel = 'Ki-100'



