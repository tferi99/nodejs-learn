'use strict';

var express = require('express');
var routing = require('./routing');

var app = express();
app.use(express.static('static'));



routing.subscribeAll(app);



var port = 3000;
var server = app.listen(port, function () {
    console.log('Port: ' + port);
});
