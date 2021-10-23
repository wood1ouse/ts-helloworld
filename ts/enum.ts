// default enum, would be compiled into object
enum directions {
    Up = 'index',
    Down = 'another index',
    Left = 5,
    Right // prev index + 1
}

directions.Right // 6
directions[5] // "Left"

// const enums without generation of object, check enum.js file
const enum links {
    github = 'https://github.com',
    youtube = 'https://youtube.com',
    google = 'https://google.com'
}

let githubLink =  links.github // "https://github.com"

