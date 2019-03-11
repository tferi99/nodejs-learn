"use strict"

// 2
// 11

// it's a closure

// objektum esetén a megőrzött érték az objektumra mutató 'pointer'
// és nem az objektum, mint érték

function belso(a) {
    return function () {
        a.ertek += 10;          // 1 + 10 = 11
        console.log("Hopp: " + a.ertek);
    }
}

var a = {ertek: 0};
setTimeout(belso(a), 1000);     // closure here: 0

a.ertek += 1;           // closure obj: 1
a = {ertek: 2}          // new object on reference
console.log("Kopp: " + a.ertek);        // 2
