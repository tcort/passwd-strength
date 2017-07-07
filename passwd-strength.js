"use strict";

(function (window) {
    "use strict";

    var characterClasses = [
        { r: /[0-9]/, size: 10 },
        { r: /[A-Z]/, size: 26 },
        { r: /[a-z]/, size: 26 },
        { r: /[^0-9A-Za-z]/, size: 33 }
    ];

    function passwdStrength(passwd) {
        passwd = '' + passwd; // ensure it's a string

        var entropy = 0.0;
        for (var i = 0; i < characterClasses.length; i++) {
            if (characterClasses[i].r.test(passwd)) {
                entropy = entropy + characterClasses[i].size;
            }
        }

        entropy = Math.log(entropy) / Math.LN2;
        entropy = passwd.length * entropy;

        return entropy;
    }

    if (typeof module === "object" && module && typeof module.exports === "object") {
        module.exports = passwdStrength;
    } else {
        window.passwdStrength = passwdStrength;
        if (typeof define === "function" && define.amd) {
            define("passwdStrength", [], function () { return passwdStrength; });
        }
    }

})(this);
