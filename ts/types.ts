import { CircleUtils } from './namespaces';

// Primitives
let num: number = 100
let str: string = 'hey'
let n: null = null
let ud: undefined = undefined
let some: number | string

// Array
let list: number[] = [0, 1, 2, 3 ,5]
let listGeneric: Array<number> = [0, 1, 2, 3, 6]

// Object
const sayNumber = (person: {name: string, num: number}) => {
    return `${person.name} number is ${person.num}`
}

let james = sayNumber({name: 'James', num: 1000})

let obj: {name: string, age: number, nickname?: string} = {
    name: 'John',
    age: 19,
    nickname: 'woodlouse'
}

// Function's return value (void if "undefined")
const arrow = (): void => {
    console.log("void type");
}

let myFunc: (firstArg: string) => void

function oldFunc(name:string): void {
    alert(`Hello, ${name}`)
}

myFunc = oldFunc

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

// Namespace import, check namespaces.ts
CircleUtils.areaOfCircle(3)
