const crypto = require('crypto');

crypto.randomBytes(64, (err, buf) => {
    const salt = buf.toString('base64');
    console.log('salt:', salt);
    crypto.pbkdf2('비밀번호', salt, 100000, 64, 'sha512', (err, key) => {
        console.log('password:', key.toString('base64'));
    });
});

// result

// first try
// salt: XU/HxjuyLXchR8AcwGoZOtHh+lHXXrgsOdwowECQEzTWcT0wYPOMUO4cgWEi73iTl+J7vCO4gCaXAgHkSRe9zg==
// password: ljguZhxKYHOJn+oinhGw8n41HTdjmIhJXcTkJek8N148lzu2pJ4ncVPH2C5n4P+lD7QMZQT5xaaru4kMipgOAQ==

// second try
// salt: TTvRBC8B4/Tfhl8f2OSRYFGFBKjObfUoBc6Mv9NaVIySgY8UHFFaVIjtRnseHc+kY3Kl6V1GmVTZKobdwDTH5g==
// password: VzSPU6eBVhsXC/JWvEnMUE5Lzi4UB1YNq1l/bnobIN+mNv6PIJFvaHKmXCWMHo21J2Zyi7Haxb7XFW3E8RSi8g==

// first !== second
