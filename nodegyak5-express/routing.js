"use strict";

var log_prefix = "ROUTING: ";

function subscribeAll(app) {
    user(app);
    person(app);
}


function user(app) {
    app.get('/user/cica', function(req, res, next) {
        console.log(log_prefix + "user-1: " + req.url);
    });
    app.get('/user/*', function(req, res, next) {
        console.log(log_prefix + "user-2XXX: " + req.url);
    });
}

function person(app) {
    app.get('/person/*', function(req, res, next) {
        console.log(log_prefix + "person-3: " + req.url);
    });
}


module.exports.subscribeAll = subscribeAll;
