// Custom Types
type id = string | number

let uId: id = 123
uId = '123'

type User = {
    firstName: string,
    age: number

    // Optional
    nickname?: string

    // Function return function (you actually can go () => () => () => ... xD)
    getPass: () => () => string
}

let currentUser: User = {
    firstName: 'Yura',
    age: 27,
    getPass(): () => string {
        return () => {
            return `${this.firstName}${this.age}`
        }
    }
}

let passwordCreator = currentUser.getPass()

passwordCreator() // "Yura27"
