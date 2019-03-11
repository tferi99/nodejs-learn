var matek = require('./matek');
var utils = require('./utils');

var a = "2";
var b = 3;

function cb(val) {
    console.log('Result: ' + val);
}

//console.log(a + b);
//console.log(parseInt(a) + b);

//console.log(matek.osszead(2, 3));
//console.log(matek.osszead(2, osszead.PI));
//matek.osszeadAsync(1, 20, cb);

matek.szamol(1, 20, matek.osszead, cb);
utils.sep();
matek.szamol(1, 20, matek.osszeadAsync, cb);
