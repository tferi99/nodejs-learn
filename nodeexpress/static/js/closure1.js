"use strict"

// it's NOT a closure

// 1
// 11

// itt a setTimeout az eredeti változón dolgozik

var a = 0;

setTimeout(function () {
    a += 10;
    console.log("Hopp: " + a);
}, 1000);

a += 1;
console.log("Kopp: " + a);
