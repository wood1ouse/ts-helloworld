"use strict";
var directions;
(function (directions) {
    directions[directions["Up"] = 2] = "Up";
    directions[directions["Down"] = 4] = "Down";
    directions[directions["Left"] = 6] = "Left";
    // previous index
    directions[directions["Right"] = 7] = "Right";
})(directions || (directions = {}));
