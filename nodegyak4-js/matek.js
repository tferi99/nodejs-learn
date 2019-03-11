"use strict";

var PI = 3.14;

// it can be called by sync/async
var osszead = function (a, b, cb) {
    if (cb != 'undefined') {
        cb(a + b);
    }
    else {
        return a + b;
    }
}

// callable only async
function osszeadAsync(a, b, cb)
{
    console.log('osszeadasync start');
    setTimeout(function () {
        console.log('do start');
        cb(a + b);
        console.log('do end');
    }, 500);
    console.log('osszeadasync end');
}

function szamolAsync(a, b, muvelet, cb) {
    muvelet(a, b, cb);
    console.log('muvelet end');
}


// exports
module.exports.PI = PI;
module.exports.osszead = osszead;
module.exports.osszeadAsync = osszeadAsync;
module.exports.szamol = szamolAsync;