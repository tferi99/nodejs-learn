"use strict";

var box = {
    items: [],

    addItem: function(item) {
        this.items.push(item)
    },

    removeItem: function (item) {
        this.items.splice(this.items.indexOf(item), 1);

    }
};

box.addItem('Jozsi');
box.addItem(3);
box.addItem({type:'zokni', size: 42});
console.log(box.items);
box.removeItem(3);
console.log(box.items);

box.items = [];
box.addItem(1);
box.addItem(2);
box.addItem(3);
box.addItem(4);

// async remove in loop
for (var i=0; i<2; i++) {
    (function (item) {

        setTimeout(function () {
            box.removeItem(item);
            console.log('item:' + item);
            console.log(box.items);
        }, 10);
    })(i);
}

console.log('vege');
console.log(box.items);
