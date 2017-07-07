"use strict";

var fs = require('fs');
var path = require('path');
var passwdStrength = require('./passwd-strength');
var passwordsTxt = null;

module.exports = function main(passwd) {

    passwd = '' + passwd; // ensure it's a string or our toLowerCase() below will fail.

    if (passwordsTxt === null) {
        passwordsTxt = fs.readFileSync(path.join(__dirname, 'passwords.txt')).toString().split("\n");
    }

    if (passwordsTxt.indexOf(passwd.toLowerCase()) !== -1) {
        return 0;
    }

    return passwdStrength(passwd);
};
