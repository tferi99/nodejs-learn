"use strict";

var _ = require("lodash");

var letters = [
    {letter: "a"},
    {letter: "b"},
    {letter: "c"}
];

var reduceLetters = _.reduce(letters, function (prev, next, num) {
    console.log("prev: " + prev + ", next:" + next.letter + ", num:" + num);
    if (num == 0) {
        return prev + next.letter;
    }
    return prev + ", " + next.letter;
}, "The letters are: ");

console.log(reduceLetters);
