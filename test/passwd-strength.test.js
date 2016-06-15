"use strict";

var passwdStrength = require('../index');
var expect = require('expect.js');

describe('passwd-strength', function () {
    describe('passwords.txt', function () {
        it('should return 0 when a password is in passwords.txt', function () {
            expect(passwdStrength('abc123')).to.be(0);
        });
        it('should return a positive number when a password is not in passwords.txt', function () {
            expect(passwdStrength('hotdog14')).to.be.greaterThan(0);
        });
        it('should find passwords in password.txt no matter the case of the input password', function () {
            expect(passwdStrength('AbC123')).to.be(0);
        });
    });
    describe('entropy calculation', function () {
        it('should be correct', function () {
            expect(passwdStrength('thisisapassword').toFixed(2)).to.be('70.51');
            expect(passwdStrength('fml123').toFixed(2)).to.be('31.02');
        });
    });
    describe('input acceptance', function () {
        it('should be handle reasonable non-string input', function () {
            expect(function () { passwdStrength(1234567890); }).not.to.throwException();
        });
    });
});
