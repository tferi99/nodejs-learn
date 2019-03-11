"use strict"

// it's a closure

// 1
// 10

// mivel paraméterként kapta a belso() az a-t, az a funkció hívásakor leválik ay eredeti a-ról
// (lehetne belül b is) és a belső függvény a létrehozásakor érvényes értéket őrzi meg

function belso(a) {
    return function () {
        a += 10;
        console.log("Hopp: " + a);
    }
}

var a = 0;
setTimeout(belso(a), 1000);

a += 1;
console.log("Kopp: " + a);
