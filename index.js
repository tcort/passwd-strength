"use strict";

var fs = require('fs');
var path = require('path');

Math.log2 = Math.log2 || function(x) { // for node v0.10
    return Math.log(x) / Math.LN2;
};

module.exports  = function passwdStrength(passwd) {

    if (fs.readFileSync(path.join(__dirname, 'passwords.txt')).toString().split("\n").indexOf(passwd.toLowerCase()) !== -1) {
        return 0;
    }

    return passwd.length * Math.log2([
        { r: /[0-9]/, size: 10 },
        { r: /[A-Z]/, size: 26 },
        { r: /[a-z]/, size: 26 },
        { r: /[^0-9A-Za-z]/, size: 33 }
    ].reduce(function (sum, clazz) {
        if (clazz.r.test(passwd)) {
            sum += clazz.size;
        }
        return sum;
    }, 0));
};
