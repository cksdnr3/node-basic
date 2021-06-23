const util = require('util');
const crypto = require('crypto');

const dontUseMe = util.deprecate((x, y) => {
    console.log(x + y);
}, 'dontUseMe 함수는 deprecated되었으니 더 이상 사용하지 마세요!');
dontUseMe(1, 2);

const randomBytesPromise = util.promisify(crypto.randomBytes);
randomBytesPromise(64)
    .then((buf) => {
        console.log(buf.toString('base64'));
    })
    .catch((error) => {
        console.error(error);
    });

// result

// 3
// (node:7648) DeprecationWarning: dontUseMe 함수는 deprecated되었으니 더 이상 사용하지 마세요!
// (Use `node --trace-deprecation ...` to show where the warning was created)
// 4vkKoetQ2xY+DpilrM/9qZXvx6LezGnszAiCJO8fVD1uboCyDzZqhLg7qA482S//4Ffu1nUtoA+wSqTKs2EJJg==
