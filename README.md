# passwd-strength

Simple password strength calculator. It computes the number of bits of entropy of a given password
and also checks the password against a list of over 30,000 common passwords.

## Installation

    npm install --save passwd-strength

## API

### passwdStrength(passwd)

Parameters:

* `passwd` - the password to test.

Returns:

* The number of bits of entropy (floating point number). Higher is better. 0 is returned when a common passwords such as `abc123`, `password`, etc is encountered.

## Example

```
"use strict";

var passwdStrength = require('passwd-strength');

app.post('/register', function (req, res, next) {
    if (passwdStrength(req.body.passwd) < 29) {
        next(new Error('Password not strong enough. Add entropy by increasing the password length and including upper case letters, lower case letters, digits, and punctuation.'));
        return;
    }
    // ...
});

```

## Tips

[RFC4086](https://tools.ietf.org/html/rfc4086) has a section on [Password Generation](https://tools.ietf.org/html/rfc4086#page-35)
that explains how to determine how much entropy you need.

## License

See [LICENSE.md](https://github.com/tcort/passwd-strength/blob/master/LICENSE.md)
