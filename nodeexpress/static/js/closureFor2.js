// it's a closure

// 0 1 2 3

for (var i=0; i<4; i++) {
    setTimeout(function (szam) {
        return function() {
            console.log(szam);
        };
    }(i), 100);
}

