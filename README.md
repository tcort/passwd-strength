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

```
Copyright (c) 2015 Thomas Cort <linuxgeek@gmail.com>

Permission to use, copy, modify, and distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
```
