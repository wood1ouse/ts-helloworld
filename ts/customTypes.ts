type User = {
    firstName: string,
    age: number
    // optional
    nickname?: string
    // function return function
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
