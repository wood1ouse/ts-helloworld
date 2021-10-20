// Primitives
let num: number = 100
let str: string = 'hey'
let n: null = null
let ud: undefined = undefined
let some: number | string

// Array
let list: number[] = [0, 1, 2, 3 ,5]
let listGeneric: Array<number> = [0, 1, 2, 3, 6]

// Object as Anonymous
const sayNumber = (person: {name: string, num: number}) => {
    return `${person.name} number is ${person.num}`
}

let james = sayNumber({name: 'James', num: 1000})

// Function's return value (void if "undefined")
const arrow = (): void => {
    console.log("void type");
}

// Tuple based
let x: [string, number] = [str, num]

// Any type
let y: [any, any] = [num, num]
let arr: Array<any> = [str, str]

// Function return Error
const error = (msg: string): never => {
    throw new Error(msg)
}

// Cannot get result due to Infinite Loop
const inf = (): never => {
    while (true) {

    }
}

// Custom Types
type id = string | number

let uId: id = 123
uId = '123'
