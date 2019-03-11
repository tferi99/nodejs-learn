// it's NOT a closure

// 4 4 4 4

for (var i=0; i<4; i++) {
    setTimeout(function () {
        console.log(i);
    }, 100);
}

