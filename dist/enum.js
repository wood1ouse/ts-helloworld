"use strict";
// default enum, would be compiled into object
var directions;
(function (directions) {
    directions["Up"] = "index";
    directions["Down"] = "another index";
    directions[directions["Left"] = 5] = "Left";
    directions[directions["Right"] = 6] = "Right"; // prev index + 1
})(directions || (directions = {}));
directions.Right; // 6
directions[5]; // "Left"
let githubLink = "https://github.com" /* github */; // "https://github.com"
