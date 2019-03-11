"use strict";

function authenticate(req, res, next) {
    console.log("authenticate")
    next();
}

function authenthorize(req, res, next) {
    console.log("authenthorize")
    next();
}

